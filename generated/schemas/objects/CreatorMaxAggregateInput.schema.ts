import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional()
}).strict();
export const CreatorMaxAggregateInputObjectSchema: z.ZodType<Prisma.CreatorMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CreatorMaxAggregateInputType>;
export const CreatorMaxAggregateInputObjectZodSchema = makeSchema();
