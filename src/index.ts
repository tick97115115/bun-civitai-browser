import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { openapi } from '@elysiajs/openapi'
import SettingsRouter from "./modules/settings";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(cors())
  .use(openapi())
  .use(SettingsRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.url}\n${app.server?.hostname}:${app.server?.port}`
);