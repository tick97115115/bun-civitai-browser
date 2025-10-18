import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string()
}).strict();
export const ModelVersionFileCreateWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateWithoutModelVersionInput>;
export const ModelVersionFileCreateWithoutModelVersionInputObjectZodSchema = makeSchema();
