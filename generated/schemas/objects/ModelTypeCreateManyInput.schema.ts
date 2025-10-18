import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const ModelTypeCreateManyInputObjectSchema: z.ZodType<Prisma.ModelTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCreateManyInput>;
export const ModelTypeCreateManyInputObjectZodSchema = makeSchema();
