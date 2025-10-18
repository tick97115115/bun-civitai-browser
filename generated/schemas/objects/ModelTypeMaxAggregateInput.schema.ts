import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const ModelTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeMaxAggregateInputType>;
export const ModelTypeMaxAggregateInputObjectZodSchema = makeSchema();
