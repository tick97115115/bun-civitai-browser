import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateWithoutBaseModelTypesInputObjectSchema as BaseModelCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedCreateWithoutBaseModelTypesInput.schema';
import { BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema as BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateOrConnectWithoutBaseModelTypesInput.schema';
import { BaseModelUpsertWithoutBaseModelTypesInputObjectSchema as BaseModelUpsertWithoutBaseModelTypesInputObjectSchema } from './BaseModelUpsertWithoutBaseModelTypesInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema';
import { BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInputObjectSchema as BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInputObjectSchema } from './BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInput.schema';
import { BaseModelUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUpdateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedUpdateWithoutBaseModelTypesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelCreateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema).optional(),
  upsert: z.lazy(() => BaseModelUpsertWithoutBaseModelTypesInputObjectSchema).optional(),
  connect: z.lazy(() => BaseModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BaseModelUpdateToOneWithWhereWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUpdateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutBaseModelTypesInputObjectSchema)]).optional()
}).strict();
export const BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInput>;
export const BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectZodSchema = makeSchema();
