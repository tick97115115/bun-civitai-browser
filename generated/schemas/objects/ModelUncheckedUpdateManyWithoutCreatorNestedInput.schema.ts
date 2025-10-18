import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutCreatorInputObjectSchema as ModelCreateWithoutCreatorInputObjectSchema } from './ModelCreateWithoutCreatorInput.schema';
import { ModelUncheckedCreateWithoutCreatorInputObjectSchema as ModelUncheckedCreateWithoutCreatorInputObjectSchema } from './ModelUncheckedCreateWithoutCreatorInput.schema';
import { ModelCreateOrConnectWithoutCreatorInputObjectSchema as ModelCreateOrConnectWithoutCreatorInputObjectSchema } from './ModelCreateOrConnectWithoutCreatorInput.schema';
import { ModelUpsertWithWhereUniqueWithoutCreatorInputObjectSchema as ModelUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './ModelUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { ModelCreateManyCreatorInputEnvelopeObjectSchema as ModelCreateManyCreatorInputEnvelopeObjectSchema } from './ModelCreateManyCreatorInputEnvelope.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithWhereUniqueWithoutCreatorInputObjectSchema as ModelUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './ModelUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { ModelUpdateManyWithWhereWithoutCreatorInputObjectSchema as ModelUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './ModelUpdateManyWithWhereWithoutCreatorInput.schema';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelUpsertWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => ModelUpsertWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelUpdateWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => ModelUpdateWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelUpdateManyWithWhereWithoutCreatorInputObjectSchema), z.lazy(() => ModelUpdateManyWithWhereWithoutCreatorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelScalarWhereInputObjectSchema), z.lazy(() => ModelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema: z.ZodType<Prisma.ModelUncheckedUpdateManyWithoutCreatorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedUpdateManyWithoutCreatorNestedInput>;
export const ModelUncheckedUpdateManyWithoutCreatorNestedInputObjectZodSchema = makeSchema();
