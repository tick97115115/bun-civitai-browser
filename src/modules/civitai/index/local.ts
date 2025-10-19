import Elysia, { file, t } from "elysia";
import { type } from "arktype";
import { join } from "node:path";
import { getSettings } from "../../settings/service";
import { getMediaDir } from "../service/fileLayout";
import { scanModelsAndSyncToDb } from "../service/crud/modelVersion";
import { cursorPaginationQuery, cursorPaginationNext, simplePagination, type ModelWithAllRelations } from "../service/crud/modelId";
import { models_request_opts, model } from "../models/models_endpoint";
import { type ModelTypes, model_types } from "../models/baseModels/misc";
import { Model } from "../../db/generated/typebox/barrel";
import { getModelIdApiInfoJsonPath, getMediaFilePathByFileName } from "../service/fileLayout";
import { extractFilenameFromUrl, removeFileExtension } from "../service/utils";
import { number } from "arktype/internal/keywords/number.ts";

export class PreviewNotFound extends Error {
  constructor(
    public message: string
  ) {
    super(message)
  }
}

export class NoPreview extends Error {
  constructor(
    public message: string
  ) {
    super(message)
  }
}

const mediaController = new Elysia({ prefix: "/media" })
  .error({ PreviewNotFound, NoPreview })
  .onError(({ code, error, status }) => {
    switch (code) {
      case "PreviewNotFound":
        return status(404, error)
      case "NoPreview":
        return status(404, error)
    }
  })
  .get("/:filename", ({ params: { filename } }) =>
    file(join(getMediaDir(getSettings().basePath), filename))
  )
  .get("/preview", async ({ query: { previewFile } }) => {
    // // 1. first trying to check if xxx.preview.xxx exists
    // const jsonFilePath = getModelIdApiInfoJsonPath(
    //   getSettings().basePath,
    //   modelType,
    //   // @ts-ignore
    //   modelId
    // )
    // const modelJson = Bun.file(jsonFilePath)
    // if (await modelJson.exists() === false) {
    //   // model json file not existed error
    //   const message = `model id: ${modelId}\nmodel json file path: ${jsonFilePath}\nCan't find the correspoding model json file.\n`
    //   console.warn(message)
    //   throw new ModelJSONFileNotExists(message, jsonFilePath)
    // }
    // try {
    //   const rawData = await modelJson.json()
    //   const data = model(rawData)
    //   if (data instanceof type.errors) {
    //     // model json content validation error
    //     const message = `model id: ${modelId}\nmodel json file path: ${jsonFilePath}\nJSON content validation Error!\n${data.summary}\n`
    //     console.warn(message)
    //     throw new ModelJSONContentValidationError(message, jsonFilePath, rawData, data.summary)
    //   } else {
    //     if (data.modelVersions[0]?.images[0]?.url ?? false) {
    //       const officialPreview = getMediaFilePathByFileName(previewFile)
    //       return file(officialPreview)
    //     } else {
    //       throw new NoPreview("Have no preview for this.")
    //     }
    //   }
    // } catch (error) {
    //   // model json parse error
    //   const message = `model id: ${modelId}\nmodel json file path: ${jsonFilePath}\nThe json structure of this model is invalid!\n`
    //   console.warn(message)
    //   throw new ModelJSONParseError(message, jsonFilePath, await modelJson.text())
    // }
    try {
      const officialPreview = getMediaFilePathByFileName(previewFile)
      return file(officialPreview)
    } catch (error) {
      throw new NoPreview("Have no preview for this.")
    }
  }, {
    query: type({ previewFile: 'string' })
  })

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
      return {
        ...res,
      };
    },
    {
      query: models_request_opts,
      response: t.Object({
        totalCount: t.Number(),
        records: t.Array(Model),
      })
    }
  )
  .get(
    "/models/nextPage",
    async ({ query }) => {
      const res = await cursorPaginationNext(query, query.modelIdAsCursor);

      return {
        records: res,
      };
    },
    {
      query: models_request_opts.and({ modelIdAsCursor: 'number' }),
      response: t.Object({
        records: t.Array(Model),
      })
    }
  )
  .post(
    "/models/pagination",
    async ({ body }) => {
      const res = await simplePagination(body)

      return {
        ...res,
      };
    },
    {
      body: models_request_opts,
      response: t.Object({
        totalCount: t.Number(),
        records: t.Array(Model),
      })
    }
  )