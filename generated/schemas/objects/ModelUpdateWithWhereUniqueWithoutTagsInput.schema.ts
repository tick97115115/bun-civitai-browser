import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutTagsInputObjectSchema as ModelUpdateWithoutTagsInputObjectSchema } from './ModelUpdateWithoutTagsInput.schema';
import { ModelUncheckedUpdateWithoutTagsInputObjectSchema as ModelUncheckedUpdateWithoutTagsInputObjectSchema } from './ModelUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const ModelUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutTagsInput>;
export const ModelUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();
