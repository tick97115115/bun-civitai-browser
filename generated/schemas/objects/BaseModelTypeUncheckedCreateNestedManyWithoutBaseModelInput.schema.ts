import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateWithoutBaseModelInputObjectSchema as BaseModelTypeCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutBaseModelInput.schema';
import { BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema as BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateOrConnectWithoutBaseModelInput.schema';
import { BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema as BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema } from './BaseModelTypeCreateManyBaseModelInputEnvelope.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema).array(), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema), z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInput>;
export const BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectZodSchema = makeSchema();
