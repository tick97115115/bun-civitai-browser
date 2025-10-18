import * as z from 'zod';
export const BaseModelTypeUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  modelVersions: z.array(z.unknown()),
  baseModel: z.unknown()
});