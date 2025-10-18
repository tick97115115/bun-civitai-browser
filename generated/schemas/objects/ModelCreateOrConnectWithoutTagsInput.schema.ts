import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutTagsInputObjectSchema as ModelCreateWithoutTagsInputObjectSchema } from './ModelCreateWithoutTagsInput.schema';
import { ModelUncheckedCreateWithoutTagsInputObjectSchema as ModelUncheckedCreateWithoutTagsInputObjectSchema } from './ModelUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutTagsInput>;
export const ModelCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
