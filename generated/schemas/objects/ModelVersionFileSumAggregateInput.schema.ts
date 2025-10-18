import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sizeKB: z.literal(true).optional(),
  modelVersionId: z.literal(true).optional()
}).strict();
export const ModelVersionFileSumAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileSumAggregateInputType>;
export const ModelVersionFileSumAggregateInputObjectZodSchema = makeSchema();
