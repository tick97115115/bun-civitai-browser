import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CreatorCountAggregateInputObjectSchema: z.ZodType<Prisma.CreatorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCountAggregateInputType>;
export const CreatorCountAggregateInputObjectZodSchema = makeSchema();
