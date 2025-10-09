import Conf from "conf";
// import ky, { KyInstance } from "ky";
// import { EnvHttpProxyAgent } from "undici";
// import { PrismaClient } from "@server/prisma/generated";
import { _settingsValidator, type Settings } from "./models";

export const settings = new Conf({
  projectName: "civitai-model-downloader",
  schema: {
    basePath: {
      type: "string",
      default: "",
    },
    civitaiToken: {
      type: "string",
      default: "",
    },
    httpProxy: {
      type: "string",
      default: "",
    },
  },
  projectVersion: "1.0.0",
  configName: "settings",
});

let currentSettings = _settingsValidator(settings.store) as Settings;

export function getSettings(refresh: boolean = false) {
  if (refresh) {
    currentSettings = _settingsValidator(settings.store) as Settings;
  }
  return currentSettings;
}

export function setSettings(newSettings: Partial<Settings>) {
  settings.set({ ...currentSettings, ...newSettings });
}
// Settings - End

// // Ky client - Start
// function instantiateKy() {
//   if (getSettings().httpProxy === "") {
//     return ky;
//   } else {
//     return ky.extend({
//       // @ts-ignore
//       dispatcher: new EnvHttpProxyAgent({
//         httpsProxy: getSettings().httpProxy,
//         noProxy: "localhost",
//       }),
//     });
//   }
// }

// let kyWithProxy: KyInstance = instantiateKy();

// console.log(`this is http proxy address: ` + getSettings().httpProxy);

// export function getKy() {
//   return kyWithProxy;
// }
// // Ky client - End

// // Prisma client - Start
// let prisma = new PrismaClient();
// export function getPrismaClient() {
//   return prisma;
// }
// // Prisma client - End

