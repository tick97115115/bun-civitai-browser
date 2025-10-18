import * as z from 'zod';
export const ModelVersionFileFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string(),
  modelVersionId: z.number().int(),
  modelVersion: z.unknown()
}));