import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  baseModelTypeId: z.number().int().optional().nullable(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  files: z.lazy(() => ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionUncheckedCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutModelInput>;
export const ModelVersionUncheckedCreateWithoutModelInputObjectZodSchema = makeSchema();
