import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  creatorId: z.literal(true).optional(),
  typeId: z.literal(true).optional(),
  nsfw: z.literal(true).optional(),
  nsfwLevel: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ModelMinAggregateInputObjectSchema: z.ZodType<Prisma.ModelMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelMinAggregateInputType>;
export const ModelMinAggregateInputObjectZodSchema = makeSchema();
