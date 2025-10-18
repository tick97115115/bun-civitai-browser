import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  baseModelId: z.number().int()
}).strict();
export const BaseModelTypeCreateManyInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateManyInput>;
export const BaseModelTypeCreateManyInputObjectZodSchema = makeSchema();
