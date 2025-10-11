import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { html } from "@elysiajs/html";
import SettingsRouter from "./modules/settings";
import homePage from "./html";

const app = new Elysia()
  .use(html())
  .use(cors())
  .use(openapi())
  .get("/", () => homePage())
  .use(SettingsRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.url}\n${app.server?.hostname}:${app.server?.port}`
);
