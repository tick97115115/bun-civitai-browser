import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional()
}).strict();
export const ModelUncheckedCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateWithoutTagsInput>;
export const ModelUncheckedCreateWithoutTagsInputObjectZodSchema = makeSchema();
