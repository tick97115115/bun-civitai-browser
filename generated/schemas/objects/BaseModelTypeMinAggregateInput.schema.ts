import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  baseModelId: z.literal(true).optional()
}).strict();
export const BaseModelTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeMinAggregateInputType>;
export const BaseModelTypeMinAggregateInputObjectZodSchema = makeSchema();
