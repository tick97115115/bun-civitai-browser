import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutModelInputObjectSchema as ModelVersionCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutModelInput.schema';
import { CreatorCreateNestedOneWithoutModelsInputObjectSchema as CreatorCreateNestedOneWithoutModelsInputObjectSchema } from './CreatorCreateNestedOneWithoutModelsInput.schema';
import { ModelTypeCreateNestedOneWithoutModelsInputObjectSchema as ModelTypeCreateNestedOneWithoutModelsInputObjectSchema } from './ModelTypeCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutModelInputObjectSchema).optional(),
  creator: z.lazy(() => CreatorCreateNestedOneWithoutModelsInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateWithoutTagsInput>;
export const ModelCreateWithoutTagsInputObjectZodSchema = makeSchema();
