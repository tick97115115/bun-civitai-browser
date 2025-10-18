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
export const ModelVersionImageCreateManyModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateManyModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateManyModelVersionInput>;
export const ModelVersionImageCreateManyModelVersionInputObjectZodSchema = makeSchema();
