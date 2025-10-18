import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutModelInput.schema';
import { TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema as TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema).optional()
}).strict();
export const ModelUncheckedCreateWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateWithoutTypeInput>;
export const ModelUncheckedCreateWithoutTypeInputObjectZodSchema = makeSchema();
