import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutTypeInputObjectSchema as ModelCreateWithoutTypeInputObjectSchema } from './ModelCreateWithoutTypeInput.schema';
import { ModelUncheckedCreateWithoutTypeInputObjectSchema as ModelUncheckedCreateWithoutTypeInputObjectSchema } from './ModelUncheckedCreateWithoutTypeInput.schema';
import { ModelCreateOrConnectWithoutTypeInputObjectSchema as ModelCreateOrConnectWithoutTypeInputObjectSchema } from './ModelCreateOrConnectWithoutTypeInput.schema';
import { ModelUpsertWithWhereUniqueWithoutTypeInputObjectSchema as ModelUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './ModelUpsertWithWhereUniqueWithoutTypeInput.schema';
import { ModelCreateManyTypeInputEnvelopeObjectSchema as ModelCreateManyTypeInputEnvelopeObjectSchema } from './ModelCreateManyTypeInputEnvelope.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithWhereUniqueWithoutTypeInputObjectSchema as ModelUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './ModelUpdateWithWhereUniqueWithoutTypeInput.schema';
import { ModelUpdateManyWithWhereWithoutTypeInputObjectSchema as ModelUpdateManyWithWhereWithoutTypeInputObjectSchema } from './ModelUpdateManyWithWhereWithoutTypeInput.schema';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelUpsertWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => ModelUpsertWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelCreateManyTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelUpdateWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => ModelUpdateWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelUpdateManyWithWhereWithoutTypeInputObjectSchema), z.lazy(() => ModelUpdateManyWithWhereWithoutTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelScalarWhereInputObjectSchema), z.lazy(() => ModelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelUpdateManyWithoutTypeNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateManyWithoutTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateManyWithoutTypeNestedInput>;
export const ModelUpdateManyWithoutTypeNestedInputObjectZodSchema = makeSchema();
