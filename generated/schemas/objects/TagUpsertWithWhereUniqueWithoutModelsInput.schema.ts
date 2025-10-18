import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutModelsInputObjectSchema as TagUpdateWithoutModelsInputObjectSchema } from './TagUpdateWithoutModelsInput.schema';
import { TagUncheckedUpdateWithoutModelsInputObjectSchema as TagUncheckedUpdateWithoutModelsInputObjectSchema } from './TagUncheckedUpdateWithoutModelsInput.schema';
import { TagCreateWithoutModelsInputObjectSchema as TagCreateWithoutModelsInputObjectSchema } from './TagCreateWithoutModelsInput.schema';
import { TagUncheckedCreateWithoutModelsInputObjectSchema as TagUncheckedCreateWithoutModelsInputObjectSchema } from './TagUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagUpdateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const TagUpsertWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutModelsInput>;
export const TagUpsertWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
