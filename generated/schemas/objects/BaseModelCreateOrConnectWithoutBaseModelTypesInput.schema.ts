import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema';
import { BaseModelCreateWithoutBaseModelTypesInputObjectSchema as BaseModelCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateWithoutBaseModelTypesInput.schema';
import { BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema as BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema } from './BaseModelUncheckedCreateWithoutBaseModelTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BaseModelCreateWithoutBaseModelTypesInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema)])
}).strict();
export const BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelCreateOrConnectWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateOrConnectWithoutBaseModelTypesInput>;
export const BaseModelCreateOrConnectWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
