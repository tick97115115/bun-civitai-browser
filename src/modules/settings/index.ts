import { getSettings, setSettings } from "./service";
import { _settingsValidator } from "./models";
import { Elysia } from "elysia";

const settingsApi = new Elysia({ prefix: "/api" })
  .get("/settings", async () => {
    return getSettings()
  }, { response: _settingsValidator })
  .post("/settings", ({ body }) => {
    setSettings(body)
    return getSettings()
  }, { response: _settingsValidator, body: _settingsValidator })

export default new Elysia({ prefix: "/settings" }).use(settingsApi)