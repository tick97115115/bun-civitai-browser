import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  baseModelTypeId: z.number().int().optional().nullable(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  files: z.lazy(() => ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema),
  images: z.lazy(() => ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema)
}).strict();
export const ModelVersionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateInput>;
export const ModelVersionUncheckedCreateInputObjectZodSchema = makeSchema();
