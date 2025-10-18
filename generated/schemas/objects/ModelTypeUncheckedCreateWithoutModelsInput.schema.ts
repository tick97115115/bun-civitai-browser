import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const ModelTypeUncheckedCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.ModelTypeUncheckedCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUncheckedCreateWithoutModelsInput>;
export const ModelTypeUncheckedCreateWithoutModelsInputObjectZodSchema = makeSchema();
