import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelCreateManyTypeInputObjectSchema: z.ZodType<Prisma.ModelCreateManyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateManyTypeInput>;
export const ModelCreateManyTypeInputObjectZodSchema = makeSchema();
