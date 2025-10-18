import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutModelsInputObjectSchema as TagUpdateWithoutModelsInputObjectSchema } from './TagUpdateWithoutModelsInput.schema';
import { TagUncheckedUpdateWithoutModelsInputObjectSchema as TagUncheckedUpdateWithoutModelsInputObjectSchema } from './TagUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const TagUpdateWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutModelsInput>;
export const TagUpdateWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
