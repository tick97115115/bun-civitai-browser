import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateOrConnectWithoutModelVersionsInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  connect: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateNestedOneWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateNestedOneWithoutModelVersionsInput>;
export const BaseModelTypeCreateNestedOneWithoutModelVersionsInputObjectZodSchema = makeSchema();
