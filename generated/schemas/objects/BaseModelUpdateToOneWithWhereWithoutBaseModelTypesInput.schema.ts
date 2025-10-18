import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema';
import { BaseModelUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUpdateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedUpdateWithoutBaseModelTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BaseModelUpdateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema)])
}).strict();
export const BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInput>;
export const BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
