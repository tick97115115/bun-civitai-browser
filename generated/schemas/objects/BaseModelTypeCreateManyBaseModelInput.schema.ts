import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const BaseModelTypeCreateManyBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateManyBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateManyBaseModelInput>;
export const BaseModelTypeCreateManyBaseModelInputObjectZodSchema = makeSchema();
