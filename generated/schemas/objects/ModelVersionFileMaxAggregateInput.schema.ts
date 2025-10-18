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
export const ModelVersionFileMaxAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileMaxAggregateInputType>;
export const ModelVersionFileMaxAggregateInputObjectZodSchema = makeSchema();
