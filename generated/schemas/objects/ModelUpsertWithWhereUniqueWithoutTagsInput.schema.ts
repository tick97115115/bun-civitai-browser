import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutTagsInputObjectSchema as ModelUpdateWithoutTagsInputObjectSchema } from './ModelUpdateWithoutTagsInput.schema';
import { ModelUncheckedUpdateWithoutTagsInputObjectSchema as ModelUncheckedUpdateWithoutTagsInputObjectSchema } from './ModelUncheckedUpdateWithoutTagsInput.schema';
import { ModelCreateWithoutTagsInputObjectSchema as ModelCreateWithoutTagsInputObjectSchema } from './ModelCreateWithoutTagsInput.schema';
import { ModelUncheckedCreateWithoutTagsInputObjectSchema as ModelUncheckedCreateWithoutTagsInputObjectSchema } from './ModelUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelUpdateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const ModelUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutTagsInput>;
export const ModelUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();
