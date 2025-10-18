import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  baseModelId: z.number().int()
}).strict();
export const BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedCreateWithoutModelVersionsInput>;
export const BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
