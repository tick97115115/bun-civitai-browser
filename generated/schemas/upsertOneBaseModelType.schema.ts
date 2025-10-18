import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeSelectObjectSchema as BaseModelTypeSelectObjectSchema } from './objects/BaseModelTypeSelect.schema';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeCreateInputObjectSchema as BaseModelTypeCreateInputObjectSchema } from './objects/BaseModelTypeCreateInput.schema';
import { BaseModelTypeUncheckedCreateInputObjectSchema as BaseModelTypeUncheckedCreateInputObjectSchema } from './objects/BaseModelTypeUncheckedCreateInput.schema';
import { BaseModelTypeUpdateInputObjectSchema as BaseModelTypeUpdateInputObjectSchema } from './objects/BaseModelTypeUpdateInput.schema';
import { BaseModelTypeUncheckedUpdateInputObjectSchema as BaseModelTypeUncheckedUpdateInputObjectSchema } from './objects/BaseModelTypeUncheckedUpdateInput.schema';

export const BaseModelTypeUpsertOneSchema: z.ZodType<Prisma.BaseModelTypeUpsertArgs> = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), where: BaseModelTypeWhereUniqueInputObjectSchema, create: z.union([ BaseModelTypeCreateInputObjectSchema, BaseModelTypeUncheckedCreateInputObjectSchema ]), update: z.union([ BaseModelTypeUpdateInputObjectSchema, BaseModelTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeUpsertArgs>;

export const BaseModelTypeUpsertOneZodSchema = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), where: BaseModelTypeWhereUniqueInputObjectSchema, create: z.union([ BaseModelTypeCreateInputObjectSchema, BaseModelTypeUncheckedCreateInputObjectSchema ]), update: z.union([ BaseModelTypeUpdateInputObjectSchema, BaseModelTypeUncheckedUpdateInputObjectSchema ]) }).strict();