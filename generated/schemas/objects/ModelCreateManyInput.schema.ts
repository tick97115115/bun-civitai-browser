import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelCreateManyInputObjectSchema: z.ZodType<Prisma.ModelCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateManyInput>;
export const ModelCreateManyInputObjectZodSchema = makeSchema();
