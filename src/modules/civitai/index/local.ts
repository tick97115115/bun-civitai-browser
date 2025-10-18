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

export default new Elysia({ prefix: `/local` })
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
        const jsonfile = Bun.file(getModelIdApiInfoJsonPath(settings.basePath, element.type.name as ModelTypes, element.id))
        if (await jsonfile.exists() !== true) {
          // model json file not existed error
        }
        try {
          const rawData = await jsonfile.json()
          const data = model(rawData)
          if (data instanceof type.errors) {
            // model json content validation error
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
      return {
        records: res,
      };
    },
    {
      query: models_request_opts.and({ modelIdAsCursor: 'number' }),
      response: t.Object({
        records: t.Array(Model),
        // previews: t.Array(t.Object({ modelId: t.Number(), previewFileName: t.String() }))
      })
    }
  );