import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  baseModelId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BaseModelTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCountAggregateInputType>;
export const BaseModelTypeCountAggregateInputObjectZodSchema = makeSchema();
