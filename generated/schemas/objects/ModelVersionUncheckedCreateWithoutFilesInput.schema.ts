import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
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
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => ModelVersionImageUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionUncheckedCreateWithoutFilesInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateWithoutFilesInput>;
export const ModelVersionUncheckedCreateWithoutFilesInputObjectZodSchema = makeSchema();
