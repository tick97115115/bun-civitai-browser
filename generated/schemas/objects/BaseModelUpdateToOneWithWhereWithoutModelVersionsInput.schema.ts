import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema';
import { BaseModelUpdateWithoutModelVersionsInputObjectSchema as BaseModelUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUpdateWithoutModelVersionsInput.schema';
import { BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './BaseModelUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BaseModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const BaseModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateToOneWithWhereWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateToOneWithWhereWithoutModelVersionsInput>;
export const BaseModelUpdateToOneWithWhereWithoutModelVersionsInputObjectZodSchema = makeSchema();
