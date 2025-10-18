import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sizeKB: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  downloadUrl: z.literal(true).optional(),
  modelVersionId: z.literal(true).optional()
}).strict();
export const ModelVersionFileMinAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileMinAggregateInputType>;
export const ModelVersionFileMinAggregateInputObjectZodSchema = makeSchema();
