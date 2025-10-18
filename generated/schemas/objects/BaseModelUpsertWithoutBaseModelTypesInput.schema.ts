import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUpdateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedUpdateWithoutBaseModelTypesInput.schema';
import { BaseModelCreateWithoutBaseModelTypesInputObjectSchema as BaseModelCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedCreateWithoutBaseModelTypesInput.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BaseModelUpdateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema)]),
  create: z.union([z.lazy(() => BaseModelCreateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema)]),
  where: z.lazy(() => BaseModelWhereInputObjectSchema).optional()
}).strict();
export const BaseModelUpsertWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelUpsertWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpsertWithoutBaseModelTypesInput>;
export const BaseModelUpsertWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
