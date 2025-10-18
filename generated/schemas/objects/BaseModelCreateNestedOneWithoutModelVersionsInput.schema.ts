import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateWithoutModelVersionsInputObjectSchema as BaseModelCreateWithoutModelVersionsInputObjectSchema } from './BaseModelCreateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema as BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema } from './BaseModelCreateOrConnectWithoutModelVersionsInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  connect: z.lazy(() => BaseModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const BaseModelCreateNestedOneWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelCreateNestedOneWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateNestedOneWithoutModelVersionsInput>;
export const BaseModelCreateNestedOneWithoutModelVersionsInputObjectZodSchema = makeSchema();
