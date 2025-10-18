import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const BaseModelMinAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelMinAggregateInputType>;
export const BaseModelMinAggregateInputObjectZodSchema = makeSchema();
