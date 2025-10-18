import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema';
import { BaseModelCreateWithoutModelVersionsInputObjectSchema as BaseModelCreateWithoutModelVersionsInputObjectSchema } from './BaseModelCreateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedCreateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BaseModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelCreateOrConnectWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateOrConnectWithoutModelVersionsInput>;
export const BaseModelCreateOrConnectWithoutModelVersionsInputObjectZodSchema = makeSchema();
