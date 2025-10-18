import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagCreateNestedManyWithoutModelsInputObjectSchema as TagCreateNestedManyWithoutModelsInputObjectSchema } from './TagCreateNestedManyWithoutModelsInput.schema';
import { CreatorCreateNestedOneWithoutModelsInputObjectSchema as CreatorCreateNestedOneWithoutModelsInputObjectSchema } from './CreatorCreateNestedOneWithoutModelsInput.schema';
import { ModelTypeCreateNestedOneWithoutModelsInputObjectSchema as ModelTypeCreateNestedOneWithoutModelsInputObjectSchema } from './ModelTypeCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutModelsInputObjectSchema).optional(),
  creator: z.lazy(() => CreatorCreateNestedOneWithoutModelsInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateWithoutModelVersionsInput>;
export const ModelCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
