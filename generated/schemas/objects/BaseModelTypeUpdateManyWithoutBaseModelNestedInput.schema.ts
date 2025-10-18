import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateWithoutBaseModelInputObjectSchema as BaseModelTypeCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutBaseModelInput.schema';
import { BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema as BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateOrConnectWithoutBaseModelInput.schema';
import { BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema as BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema } from './BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInput.schema';
import { BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema as BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema } from './BaseModelTypeCreateManyBaseModelInputEnvelope.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema as BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema } from './BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInput.schema';
import { BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectSchema as BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectSchema } from './BaseModelTypeUpdateManyWithWhereWithoutBaseModelInput.schema';
import { BaseModelTypeScalarWhereInputObjectSchema as BaseModelTypeScalarWhereInputObjectSchema } from './BaseModelTypeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema).array(), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema), z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema), z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema), z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema), z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema), z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateManyWithoutBaseModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateManyWithoutBaseModelNestedInput>;
export const BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectZodSchema = makeSchema();
