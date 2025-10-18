import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutModelInput.schema';
import { TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema as TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema).optional()
}).strict();
export const ModelUncheckedCreateWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateWithoutCreatorInput>;
export const ModelUncheckedCreateWithoutCreatorInputObjectZodSchema = makeSchema();
