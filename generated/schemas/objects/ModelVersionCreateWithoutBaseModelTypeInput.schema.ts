import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateNestedOneWithoutModelVersionsInputObjectSchema as ModelCreateNestedOneWithoutModelVersionsInputObjectSchema } from './ModelCreateNestedOneWithoutModelVersionsInput.schema';
import { BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema as BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema } from './BaseModelCreateNestedOneWithoutModelVersionsInput.schema';
import { ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateNestedManyWithoutModelVersionInput.schema';
import { ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema as ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateNestedManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutModelVersionsInputObjectSchema),
  baseModel: z.lazy(() => BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema),
  files: z.lazy(() => ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema).optional()
}).strict();
export const ModelVersionCreateWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateWithoutBaseModelTypeInput>;
export const ModelVersionCreateWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
