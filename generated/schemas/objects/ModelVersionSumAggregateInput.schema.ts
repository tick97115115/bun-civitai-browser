import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  modelId: z.literal(true).optional(),
  baseModelId: z.literal(true).optional(),
  baseModelTypeId: z.literal(true).optional(),
  nsfwLevel: z.literal(true).optional()
}).strict();
export const ModelVersionSumAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionSumAggregateInputType>;
export const ModelVersionSumAggregateInputObjectZodSchema = makeSchema();
