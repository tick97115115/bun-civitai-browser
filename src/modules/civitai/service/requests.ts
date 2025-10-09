import { models_response, models_request_opts, type ModelsRequestOpts } from "../models/models_endpoint";
import { getSettings } from "../../settings/service";
import ky, { KyInstance } from "ky";
import { modelId_model } from "../models/modelId_endpoint";
import { type } from "arktype";
import { obj2UrlSearchParams } from "./utils";

export function getRequester() {
  const settingsInfo = getSettings()
  return ky.extend({
    // @ts-ignore
    proxy: settingsInfo.httpProxy,
    headers: { 'Authorization': `Bearer ${settingsInfo.civitaiToken}` },
    timeout: 18000
  })
}

export async function modelId(requester: KyInstance, modelId: number) {
  const res = await requester.get(`https://civitai.com/api/v1/models/${modelId}`);
  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`);
  }
  const data = await res.json();
  const out = modelId_model(data);
  if (out instanceof type.errors) {
    console.log(out.summary);
    throw new Error("Invalid model_id");
  }
  return out;
}

export async function models(requester: KyInstance, params: ModelsRequestOpts) {
  const res = await requester.get("https://civitai.com/api/v1/models", { searchParams: obj2UrlSearchParams(params) })
  if (!res.ok) {
    const result: ModelsEndpointRes = {
      code: 500,
      message: `response is not ok\n${res.status} ${res.statusText}`,
    };
    return result;
  }
  const json = await res.json();
  const data = models_response(json);
  if (data instanceof type.errors) {
    const result: ModelsEndpointRes = {
      code: 500,
      message: `parse json failed\n${data.summary}`,
    };
    return result;
  }
  const result: ModelsEndpointRes = {
    code: 200,
    message: "success",
    data: data,
  };
  return result;
}

export async function getDownloadUrl() {

}