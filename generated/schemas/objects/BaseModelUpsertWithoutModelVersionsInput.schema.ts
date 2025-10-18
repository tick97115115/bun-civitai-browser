import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelUpdateWithoutModelVersionsInputObjectSchema as BaseModelUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUpdateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedUpdateWithoutModelVersionsInput.schema';
import { BaseModelCreateWithoutModelVersionsInputObjectSchema as BaseModelCreateWithoutModelVersionsInputObjectSchema } from './BaseModelCreateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BaseModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)]),
  create: z.union([z.lazy(() => BaseModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]),
  where: z.lazy(() => BaseModelWhereInputObjectSchema).optional()
}).strict();
export const BaseModelUpsertWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelUpsertWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpsertWithoutModelVersionsInput>;
export const BaseModelUpsertWithoutModelVersionsInputObjectZodSchema = makeSchema();
