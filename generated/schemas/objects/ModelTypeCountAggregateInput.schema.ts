import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ModelTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCountAggregateInputType>;
export const ModelTypeCountAggregateInputObjectZodSchema = makeSchema();
