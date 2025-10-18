import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateOrConnectWithoutModelVersionsInput.schema';
import { BaseModelTypeUpsertWithoutModelVersionsInputObjectSchema as BaseModelTypeUpsertWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUpsertWithoutModelVersionsInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema as BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInput.schema';
import { BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUpdateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  upsert: z.lazy(() => BaseModelTypeUpsertWithoutModelVersionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BaseModelTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BaseModelTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema)]).optional()
}).strict();
export const BaseModelTypeUpdateOneWithoutModelVersionsNestedInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateOneWithoutModelVersionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateOneWithoutModelVersionsNestedInput>;
export const BaseModelTypeUpdateOneWithoutModelVersionsNestedInputObjectZodSchema = makeSchema();
