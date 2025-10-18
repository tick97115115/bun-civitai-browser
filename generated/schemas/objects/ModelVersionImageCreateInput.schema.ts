import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedOneWithoutImagesInputObjectSchema as ModelVersionCreateNestedOneWithoutImagesInputObjectSchema } from './ModelVersionCreateNestedOneWithoutImagesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  url: z.string(),
  nsfwLevel: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  hash: z.string(),
  type: z.string(),
  modelVersion: z.lazy(() => ModelVersionCreateNestedOneWithoutImagesInputObjectSchema)
}).strict();
export const ModelVersionImageCreateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateInput>;
export const ModelVersionImageCreateInputObjectZodSchema = makeSchema();
