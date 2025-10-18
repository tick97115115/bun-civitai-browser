import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUpdateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedUpdateWithoutModelVersionsInput.schema';
import { BaseModelTypeCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema)]),
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema)]),
  where: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUpsertWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpsertWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpsertWithoutModelVersionsInput>;
export const BaseModelTypeUpsertWithoutModelVersionsInputObjectZodSchema = makeSchema();
