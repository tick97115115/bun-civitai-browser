import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  baseModelId: z.literal(true).optional()
}).strict();
export const BaseModelTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeMaxAggregateInputType>;
export const BaseModelTypeMaxAggregateInputObjectZodSchema = makeSchema();
