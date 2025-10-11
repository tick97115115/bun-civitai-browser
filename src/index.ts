import { Elysia, file } from "elysia";
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static';
import SettingsRouter from "./modules/settings";
import homePage, { files, index } from "./html/index.html";

const home = new Elysia({
  serve: {

  }
})
const app = new Elysia()
  .get("/", () => homePage)
  .use(html())
  .use(cors())
  .use(openapi())
  .use(staticPlugin())
  .use(SettingsRouter)
  .listen(3000);
export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.url}\n${app.server?.hostname}:${app.server?.port}`
);
