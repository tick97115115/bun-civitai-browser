import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeCreateWithoutBaseModelInputObjectSchema as BaseModelTypeCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema)])
}).strict();
export const BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateOrConnectWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateOrConnectWithoutBaseModelInput>;
export const BaseModelTypeCreateOrConnectWithoutBaseModelInputObjectZodSchema = makeSchema();
