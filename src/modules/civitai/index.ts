import { Elysia } from "elysia";
import { models_request_opts, models_response } from "./models/models_endpoint";

const ivitaiApiMirror = new Elysia({ prefix: "/api/v1" }).get("/models", async ({ query }) => {

}, {
	query: models_request_opts,
	response: models_response
})

export default new Elysia({ prefix: "/civitai" }).use(ivitaiApiMirror)