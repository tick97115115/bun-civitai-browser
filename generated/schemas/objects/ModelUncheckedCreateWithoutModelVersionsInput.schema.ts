import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema as TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional().nullable(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutModelsInputObjectSchema).optional()
}).strict();
export const ModelUncheckedCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateWithoutModelVersionsInput>;
export const ModelUncheckedCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
