import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeUpdateWithoutBaseModelInputObjectSchema as BaseModelTypeUpdateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUpdateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedUpdateWithoutBaseModelInput.schema';
import { BaseModelTypeCreateWithoutBaseModelInputObjectSchema as BaseModelTypeCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BaseModelTypeUpdateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema)]),
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema)])
}).strict();
export const BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInput>;
export const BaseModelTypeUpsertWithWhereUniqueWithoutBaseModelInputObjectZodSchema = makeSchema();
