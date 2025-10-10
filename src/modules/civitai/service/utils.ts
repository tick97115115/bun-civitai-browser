import { promises as fs } from "node:fs";
import { join } from "node:path";
import { pathExists } from "path-exists";
import fg from "fast-glob";
import { getSettings } from "../../settings/service";

/**
 * 检查文件夹内是否存在至少一个 .safetensors 文件
 * @param dirPath 文件夹的绝对路径
 * @returns Promise<boolean> 是否存在 .safetensors 文件
 */
export async function hasSafetensorsFile(dirPath: string): Promise<boolean> {
  try {
    const files = await fs.readdir(dirPath);

    for (const file of files) {
      const fullPath = join(dirPath, file);
      const stats = await fs.stat(fullPath);

      if (stats.isFile() && file.endsWith(".safetensors")) {
        return true; // 找到立即返回 true
      }
    }

    return false; // 遍历完成未找到
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
    return false; // 出错时返回 false
  }
}

export async function checkIfModelVersionOnDisk(modelVersionPath: string) {
  if (
    (await pathExists(modelVersionPath)) &&
    (await hasSafetensorsFile(modelVersionPath))
  ) {
    return true;
  }
  return false;
}

export async function scanModels() {
  const expression =
    process.platform === "win32"
      ? `${fg.convertPathToPattern(getSettings().basePath)}/**/*.safetensors`
      : `${getSettings().basePath}/**/*.safetensors`;
  const safetensors = await fg.async(expression);
  return safetensors;
}

/**
 * 去掉文件名的后缀（扩展名）
 * @param filename 完整的文件名（可以包含路径）
 * @returns 不包含后缀的文件名
 */
export function removeFileExtension(filename: string): string {
  // 处理路径分隔符（兼容Windows和Unix）
  const lastSeparatorIndex = Math.max(
    filename.lastIndexOf("/"),
    filename.lastIndexOf("\\")
  );

  // 获取最后一个点号的位置（在最后一个路径分隔符之后）
  const lastDotIndex = filename.lastIndexOf(".");

  // 如果没有点号，或者点号在路径分隔符之前（表示是隐藏文件或没有扩展名），返回原文件名
  if (lastDotIndex === -1 || lastDotIndex < lastSeparatorIndex) {
    return filename;
  }

  // 返回去掉后缀的部分
  return filename.substring(0, lastDotIndex);
}

export function obj2UrlSearchParams(params: object) {
  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((v) => urlSearchParams.append(key, String(v)));
    } else {
      urlSearchParams.append(key, String(value));
    }
  }
  return urlSearchParams;
}
