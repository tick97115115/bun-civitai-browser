import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateWithoutBaseModelTypesInputObjectSchema as BaseModelCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedCreateWithoutBaseModelTypesInput.schema';
import { BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema as BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateOrConnectWithoutBaseModelTypesInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelCreateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema).optional(),
  connect: z.lazy(() => BaseModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelCreateNestedOneWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateNestedOneWithoutBaseModelTypesInput>;
export const BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
