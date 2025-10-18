import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  url: z.string(),
  nsfwLevel: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  hash: z.string(),
  type: z.string()
}).strict();
export const ModelVersionImageCreateWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateWithoutModelVersionInput>;
export const ModelVersionImageCreateWithoutModelVersionInputObjectZodSchema = makeSchema();
