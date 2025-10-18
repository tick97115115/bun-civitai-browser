import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema as BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema } from './BaseModelCreateNestedOneWithoutModelVersionsInput.schema';
import { BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateNestedOneWithoutModelVersionsInput.schema';
import { ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateNestedManyWithoutModelVersionInput.schema';
import { ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  baseModel: z.lazy(() => BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema),
  baseModelType: z.lazy(() => BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectSchema).optional(),
  files: z.lazy(() => ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateWithoutModelInput>;
export const ModelVersionCreateWithoutModelInputObjectZodSchema = makeSchema();
