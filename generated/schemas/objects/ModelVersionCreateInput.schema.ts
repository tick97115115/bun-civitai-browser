import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateNestedOneWithoutModelVersionsInputObjectSchema as ModelCreateNestedOneWithoutModelVersionsInputObjectSchema } from './ModelCreateNestedOneWithoutModelVersionsInput.schema';
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
  model: z.lazy(() => ModelCreateNestedOneWithoutModelVersionsInputObjectSchema),
  baseModel: z.lazy(() => BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema),
  baseModelType: z.lazy(() => BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectSchema).optional(),
  files: z.lazy(() => ModelVersionFileCreateNestedManyWithoutModelVersionInputObjectSchema),
  images: z.lazy(() => ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema)
}).strict();
export const ModelVersionCreateInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateInput>;
export const ModelVersionCreateInputObjectZodSchema = makeSchema();
