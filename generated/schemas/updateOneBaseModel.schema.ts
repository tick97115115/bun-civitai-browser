import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './objects/BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelUpdateInputObjectSchema as BaseModelUpdateInputObjectSchema } from './objects/BaseModelUpdateInput.schema';
import { BaseModelUncheckedUpdateInputObjectSchema as BaseModelUncheckedUpdateInputObjectSchema } from './objects/BaseModelUncheckedUpdateInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';

export const BaseModelUpdateOneSchema: z.ZodType<Prisma.BaseModelUpdateArgs> = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), data: z.union([BaseModelUpdateInputObjectSchema, BaseModelUncheckedUpdateInputObjectSchema]), where: BaseModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BaseModelUpdateArgs>;

export const BaseModelUpdateOneZodSchema = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), data: z.union([BaseModelUpdateInputObjectSchema, BaseModelUncheckedUpdateInputObjectSchema]), where: BaseModelWhereUniqueInputObjectSchema }).strict();