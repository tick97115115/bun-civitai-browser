import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutModelInputObjectSchema as ModelVersionCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutModelInput.schema';
import { TagCreateNestedManyWithoutModelsInputObjectSchema as TagCreateNestedManyWithoutModelsInputObjectSchema } from './TagCreateNestedManyWithoutModelsInput.schema';
import { ModelTypeCreateNestedOneWithoutModelsInputObjectSchema as ModelTypeCreateNestedOneWithoutModelsInputObjectSchema } from './ModelTypeCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutModelInputObjectSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutModelsInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelCreateWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelCreateWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateWithoutCreatorInput>;
export const ModelCreateWithoutCreatorInputObjectZodSchema = makeSchema();
