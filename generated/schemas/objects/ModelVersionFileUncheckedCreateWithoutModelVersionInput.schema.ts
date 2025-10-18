import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string()
}).strict();
export const ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUncheckedCreateWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUncheckedCreateWithoutModelVersionInput>;
export const ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectZodSchema = makeSchema();
