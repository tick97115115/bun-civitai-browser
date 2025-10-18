import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeSelectObjectSchema as BaseModelTypeSelectObjectSchema } from './objects/BaseModelTypeSelect.schema';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeUpdateInputObjectSchema as BaseModelTypeUpdateInputObjectSchema } from './objects/BaseModelTypeUpdateInput.schema';
import { BaseModelTypeUncheckedUpdateInputObjectSchema as BaseModelTypeUncheckedUpdateInputObjectSchema } from './objects/BaseModelTypeUncheckedUpdateInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';

export const BaseModelTypeUpdateOneSchema: z.ZodType<Prisma.BaseModelTypeUpdateArgs> = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), data: z.union([BaseModelTypeUpdateInputObjectSchema, BaseModelTypeUncheckedUpdateInputObjectSchema]), where: BaseModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateArgs>;

export const BaseModelTypeUpdateOneZodSchema = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), data: z.union([BaseModelTypeUpdateInputObjectSchema, BaseModelTypeUncheckedUpdateInputObjectSchema]), where: BaseModelTypeWhereUniqueInputObjectSchema }).strict();