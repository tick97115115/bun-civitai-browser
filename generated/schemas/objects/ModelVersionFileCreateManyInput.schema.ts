import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string(),
  modelVersionId: z.number().int()
}).strict();
export const ModelVersionFileCreateManyInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateManyInput>;
export const ModelVersionFileCreateManyInputObjectZodSchema = makeSchema();
