import * as z from 'zod';
export const ModelFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  modelVersions: z.array(z.unknown()),
  tags: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  creator: z.unknown().optional(),
  type: z.unknown()
}));