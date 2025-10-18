import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutTagsInputObjectSchema as ModelCreateWithoutTagsInputObjectSchema } from './ModelCreateWithoutTagsInput.schema';
import { ModelUncheckedCreateWithoutTagsInputObjectSchema as ModelUncheckedCreateWithoutTagsInputObjectSchema } from './ModelUncheckedCreateWithoutTagsInput.schema';
import { ModelCreateOrConnectWithoutTagsInputObjectSchema as ModelCreateOrConnectWithoutTagsInputObjectSchema } from './ModelCreateOrConnectWithoutTagsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelUncheckedCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutTagsInput>;
export const ModelUncheckedCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();
