import Elysia, { file, t } from "elysia";
import { type } from "arktype";
import { join } from "node:path";
import { getSettings } from "../../settings/service";
import { getMediaDir } from "../service/fileLayout";
import { scanModelsAndSyncToDb } from "../service/crud/modelVersion";
import { cursorPaginationQuery, cursorPaginationNext } from "../service/crud/modelId";
import { models_request_opts, model } from "../models/models_endpoint";
import { type ModelTypes } from "../models/baseModels/misc";
import { Model } from "../../db/generated/typebox/barrel";
import { getModelIdApiInfoJsonPath } from "../service/fileLayout";
import { extractFilenameFromUrl } from "../service/utils";

const mediaController = new Elysia({ prefix: "/media" })
  .get("/:filename", ({ params: { filename } }) =>
    file(join(getMediaDir(getSettings().basePath), filename))
  )

export class ModelJSONFileNotExists extends Error {
  constructor(
    public message: string,
    public jsonFilePath: string,
  ) {
    super(message)
    this.jsonFilePath = jsonFilePath
  }
}

export class ModelJSONContentValidationError extends Error {
  constructor(
    public message: string,
    public jsonFilePath: string,
    public jsonContent: string,
    public arkSummary: string
  ) {
    super(message)
    this.jsonFilePath = jsonFilePath
    this.jsonContent = jsonContent
    this.arkSummary = arkSummary
  }
}

export class ModelJSONParseError extends Error {
  constructor(
    public message: string,
    public jsonFilePath: string,
    public jsonContent: string,
  ) {
    super(message)
    this.jsonFilePath = jsonFilePath
    this.jsonContent = jsonContent
  }
}

export default new Elysia({ prefix: `/local` })
  .error({ ModelJSONFileNotExists, ModelJSONContentValidationError, ModelJSONParseError })
  .onError(({ code, error, status }) => {
    switch (code) {
      case "ModelJSONFileNotExists":
        return status(404, error)
      case "ModelJSONContentValidationError":
        return status(500, error)
      case "ModelJSONParseError":
        return status(500, error)
    }
  })
  .use(mediaController)
  .head("/scanModels", async () => {
    await scanModelsAndSyncToDb()
    return true
  })
  .get(
    "/models",
    async ({ query }) => {
      const res = await cursorPaginationQuery(query)
      const previews: Array<{ modelId: number, previewFileName: string | undefined }> = []
      const settings = getSettings()
      for (let index = 0; index < res.records.length; index++) {
        const element = res.records[index];
        const jsonFilePath = getModelIdApiInfoJsonPath(settings.basePath, element.type.name as ModelTypes, element.id)
        const jsonfile = Bun.file(jsonFilePath)
        if (await jsonfile.exists() !== true) {
          // model json file not existed error
          const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nCan't find the correspoding model json file.\n`
          console.warn(message)
          throw new ModelJSONFileNotExists(message, jsonFilePath)
        }
        try {
          const rawData = await jsonfile.json()
          const data = model(rawData)
          if (data instanceof type.errors) {
            // model json content validation error
            const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nJSON content validation Error!\n${data.summary}\n`
            console.warn(message)
            throw new ModelJSONContentValidationError(message, jsonFilePath, rawData, data.summary)
          } else {
            previews.push({
              modelId: data.id,
              previewFileName: data.modelVersions[0].images[0].url ?
                extractFilenameFromUrl(data.modelVersions[0].images[0].url) :
                undefined
            })
          }
        } catch (error) {
          // model json parse error
          const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nThe json structure of this model is invalid!\n`
          console.warn(message)
          throw new ModelJSONParseError(message, jsonFilePath, await jsonfile.text())
        }
      }
      return { ...res, previews: previews };
    },
    {
      query: models_request_opts,
      response: t.Object({
        totalCount: t.Number(),
        records: t.Array(Model),
        previews: t.Array(t.Object({ modelId: t.Number(), previewFileName: t.Union([t.String(), t.Undefined()]) }))
      })
    }
  )
  .get(
    "/models/nextPage",
    async ({ query }) => {
      const res = await cursorPaginationNext(query, query.modelIdAsCursor);
      const previews: Array<{ modelId: number, previewFileName: string | undefined }> = []
      const settings = getSettings()
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        const jsonFilePath = getModelIdApiInfoJsonPath(settings.basePath, element.type.name as ModelTypes, element.id)
        const jsonfile = Bun.file(jsonFilePath)
        if (await jsonfile.exists() !== true) {
          // model json file not existed error
          const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nCan't find the correspoding model json file.\n`
          console.warn(message)
          throw new ModelJSONFileNotExists(message, jsonFilePath)
        }
        try {
          const rawData = await jsonfile.json()
          const data = model(rawData)
          if (data instanceof type.errors) {
            // model json content validation error
            const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nJSON content validation Error!\n${data.summary}\n`
            console.warn(message)
            throw new ModelJSONContentValidationError(message, jsonFilePath, rawData, data.summary)
          } else {
            previews.push({
              modelId: data.id,
              previewFileName: data.modelVersions[0].images[0].url ?
                extractFilenameFromUrl(data.modelVersions[0].images[0].url) :
                undefined
            })
          }
        } catch (error) {
          // model json parse error
          const message = `model id: ${element.id}\nmodel json file path: ${jsonFilePath}\nThe json structure of this model is invalid!\n`
          console.warn(message)
          throw new ModelJSONParseError(message, jsonFilePath, await jsonfile.text())
        }
      }
      return {
        records: res,
        previews
      };
    },
    {
      query: models_request_opts.and({ modelIdAsCursor: 'number' }),
      response: t.Object({
        records: t.Array(Model),
        previews: t.Array(t.Object({ modelId: t.Number(), previewFileName: t.Union([t.String(), t.Undefined()]) }))
      })
    }
  );