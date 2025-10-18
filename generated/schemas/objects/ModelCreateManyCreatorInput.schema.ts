import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelCreateManyCreatorInputObjectSchema: z.ZodType<Prisma.ModelCreateManyCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateManyCreatorInput>;
export const ModelCreateManyCreatorInputObjectZodSchema = makeSchema();
