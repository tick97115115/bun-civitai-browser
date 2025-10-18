import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutModelInputObjectSchema as ModelVersionCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutModelInput.schema';
import { TagCreateNestedManyWithoutModelsInputObjectSchema as TagCreateNestedManyWithoutModelsInputObjectSchema } from './TagCreateNestedManyWithoutModelsInput.schema';
import { CreatorCreateNestedOneWithoutModelsInputObjectSchema as CreatorCreateNestedOneWithoutModelsInputObjectSchema } from './CreatorCreateNestedOneWithoutModelsInput.schema';
import { ModelTypeCreateNestedOneWithoutModelsInputObjectSchema as ModelTypeCreateNestedOneWithoutModelsInputObjectSchema } from './ModelTypeCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutModelInputObjectSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutModelsInputObjectSchema),
  creator: z.lazy(() => CreatorCreateNestedOneWithoutModelsInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelCreateInputObjectSchema: z.ZodType<Prisma.ModelCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateInput>;
export const ModelCreateInputObjectZodSchema = makeSchema();
