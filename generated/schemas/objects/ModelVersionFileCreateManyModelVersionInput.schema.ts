import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string()
}).strict();
export const ModelVersionFileCreateManyModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateManyModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateManyModelVersionInput>;
export const ModelVersionFileCreateManyModelVersionInputObjectZodSchema = makeSchema();
