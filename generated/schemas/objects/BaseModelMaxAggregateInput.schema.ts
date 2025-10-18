import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const BaseModelMaxAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelMaxAggregateInputType>;
export const BaseModelMaxAggregateInputObjectZodSchema = makeSchema();
