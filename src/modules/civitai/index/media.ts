import Elysia, { file } from "elysia";
import { getSettings } from "../../settings/service";
import { getMediaDir } from "../service/fileLayout";
import { join } from "node:path";

export default new Elysia({ prefix: "/media" })
  .get("/:filename", ({ params: { filename } }) =>
    file(join(getMediaDir(getSettings().basePath), filename))
  )