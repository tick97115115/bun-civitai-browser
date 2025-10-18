import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutTagsInputObjectSchema as ModelCreateWithoutTagsInputObjectSchema } from './ModelCreateWithoutTagsInput.schema';
import { ModelUncheckedCreateWithoutTagsInputObjectSchema as ModelUncheckedCreateWithoutTagsInputObjectSchema } from './ModelUncheckedCreateWithoutTagsInput.schema';
import { ModelCreateOrConnectWithoutTagsInputObjectSchema as ModelCreateOrConnectWithoutTagsInputObjectSchema } from './ModelCreateOrConnectWithoutTagsInput.schema';
import { ModelUpsertWithWhereUniqueWithoutTagsInputObjectSchema as ModelUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './ModelUpsertWithWhereUniqueWithoutTagsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithWhereUniqueWithoutTagsInputObjectSchema as ModelUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './ModelUpdateWithWhereUniqueWithoutTagsInput.schema';
import { ModelUpdateManyWithWhereWithoutTagsInputObjectSchema as ModelUpdateManyWithWhereWithoutTagsInputObjectSchema } from './ModelUpdateManyWithWhereWithoutTagsInput.schema';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => ModelUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => ModelUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => ModelUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelScalarWhereInputObjectSchema), z.lazy(() => ModelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelUncheckedUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.ModelUncheckedUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedUpdateManyWithoutTagsNestedInput>;
export const ModelUncheckedUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();
