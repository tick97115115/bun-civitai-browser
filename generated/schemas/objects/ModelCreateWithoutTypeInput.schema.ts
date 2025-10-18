import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutModelInputObjectSchema as ModelVersionCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutModelInput.schema';
import { TagCreateNestedManyWithoutModelsInputObjectSchema as TagCreateNestedManyWithoutModelsInputObjectSchema } from './TagCreateNestedManyWithoutModelsInput.schema';
import { CreatorCreateNestedOneWithoutModelsInputObjectSchema as CreatorCreateNestedOneWithoutModelsInputObjectSchema } from './CreatorCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutModelInputObjectSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutModelsInputObjectSchema).optional(),
  creator: z.lazy(() => CreatorCreateNestedOneWithoutModelsInputObjectSchema).optional()
}).strict();
export const ModelCreateWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelCreateWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateWithoutTypeInput>;
export const ModelCreateWithoutTypeInputObjectZodSchema = makeSchema();
