import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional()
}).strict();
export const CreatorMinAggregateInputObjectSchema: z.ZodType<Prisma.CreatorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CreatorMinAggregateInputType>;
export const CreatorMinAggregateInputObjectZodSchema = makeSchema();
