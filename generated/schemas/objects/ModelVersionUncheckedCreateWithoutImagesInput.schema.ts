import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  baseModelTypeId: z.number().int().optional().nullable(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  files: z.lazy(() => ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionUncheckedCreateWithoutImagesInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutImagesInput>;
export const ModelVersionUncheckedCreateWithoutImagesInputObjectZodSchema = makeSchema();
