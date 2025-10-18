import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagScalarWhereInputObjectSchema as TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';
import { TagUpdateManyMutationInputObjectSchema as TagUpdateManyMutationInputObjectSchema } from './TagUpdateManyMutationInput.schema';
import { TagUncheckedUpdateManyWithoutModelsInputObjectSchema as TagUncheckedUpdateManyWithoutModelsInputObjectSchema } from './TagUncheckedUpdateManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputObjectSchema), z.lazy(() => TagUncheckedUpdateManyWithoutModelsInputObjectSchema)])
}).strict();
export const TagUpdateManyWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateManyWithWhereWithoutModelsInput>;
export const TagUpdateManyWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
