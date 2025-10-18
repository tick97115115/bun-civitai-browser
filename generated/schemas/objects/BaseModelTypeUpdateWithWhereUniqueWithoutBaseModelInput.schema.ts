import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeUpdateWithoutBaseModelInputObjectSchema as BaseModelTypeUpdateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUpdateWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedUpdateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BaseModelTypeUpdateWithoutBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema)])
}).strict();
export const BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInput>;
export const BaseModelTypeUpdateWithWhereUniqueWithoutBaseModelInputObjectZodSchema = makeSchema();
