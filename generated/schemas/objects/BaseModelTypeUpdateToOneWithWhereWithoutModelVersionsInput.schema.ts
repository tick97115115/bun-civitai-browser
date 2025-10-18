import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema';
import { BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUpdateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInput>;
export const BaseModelTypeUpdateToOneWithWhereWithoutModelVersionsInputObjectZodSchema = makeSchema();
