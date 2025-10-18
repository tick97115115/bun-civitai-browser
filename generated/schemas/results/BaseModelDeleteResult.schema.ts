import * as z from 'zod';
export const BaseModelDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  modelVersions: z.array(z.unknown()),
  baseModelTypes: z.array(z.unknown())
}));