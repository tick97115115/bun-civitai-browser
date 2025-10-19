import { treaty } from '@elysiajs/eden'

import type { App } from '../index'
export const edenTreaty = treaty<App>(window.location.origin)

export function getFileType(filename: string) {
  if (!filename) return 'unknown';
  const ext = filename.split('.').pop()!.toLowerCase();

  const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'avif'];
  const videoExts = ['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv', 'flv'];

  if (imageExts.includes(ext)) return 'image';
  if (videoExts.includes(ext)) return 'video';
  return 'unknown';
}

// // 示例：
// console.log(getFileType('photo.jpg'));   // => "image"
// console.log(getFileType('clip.mp4'));    // => "video"
// console.log(getFileType('doc.pdf'));     // => "unknown"
