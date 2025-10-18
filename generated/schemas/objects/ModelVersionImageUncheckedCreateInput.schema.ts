import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  url: z.string(),
  nsfwLevel: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  hash: z.string(),
  type: z.string(),
  modelVersionId: z.number().int()
}).strict();
export const ModelVersionImageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUncheckedCreateInput>;
export const ModelVersionImageUncheckedCreateInputObjectZodSchema = makeSchema();
