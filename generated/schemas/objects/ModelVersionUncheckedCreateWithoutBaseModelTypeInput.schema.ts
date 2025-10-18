import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  files: z.lazy(() => ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutBaseModelTypeInput>;
export const ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
