import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateWithoutModelVersionsInputObjectSchema as BaseModelCreateWithoutModelVersionsInputObjectSchema } from './BaseModelCreateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedCreateWithoutModelVersionsInput.schema';
import { BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema as BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema } from './BaseModelCreateOrConnectWithoutModelVersionsInput.schema';
import { BaseModelUpsertWithoutModelVersionsInputObjectSchema as BaseModelUpsertWithoutModelVersionsInputObjectSchema } from './BaseModelUpsertWithoutModelVersionsInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './BaseModelWhereUniqueInput.schema';
import { BaseModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema as BaseModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema } from './BaseModelUpdateToOneWithWhereWithoutModelVersionsInput.schema';
import { BaseModelUpdateWithoutModelVersionsInputObjectSchema as BaseModelUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUpdateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BaseModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BaseModelCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  upsert: z.lazy(() => BaseModelUpsertWithoutModelVersionsInputObjectSchema).optional(),
  connect: z.lazy(() => BaseModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BaseModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)]).optional()
}).strict();
export const BaseModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateOneRequiredWithoutModelVersionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateOneRequiredWithoutModelVersionsNestedInput>;
export const BaseModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectZodSchema = makeSchema();
