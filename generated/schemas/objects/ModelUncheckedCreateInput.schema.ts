import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutModelInput.schema';
import { TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema as TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema)
}).strict();
export const ModelUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateInput>;
export const ModelUncheckedCreateInputObjectZodSchema = makeSchema();
