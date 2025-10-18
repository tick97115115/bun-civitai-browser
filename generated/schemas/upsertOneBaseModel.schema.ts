import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './objects/BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';
import { BaseModelCreateInputObjectSchema as BaseModelCreateInputObjectSchema } from './objects/BaseModelCreateInput.schema';
import { BaseModelUncheckedCreateInputObjectSchema as BaseModelUncheckedCreateInputObjectSchema } from './objects/BaseModelUncheckedCreateInput.schema';
import { BaseModelUpdateInputObjectSchema as BaseModelUpdateInputObjectSchema } from './objects/BaseModelUpdateInput.schema';
import { BaseModelUncheckedUpdateInputObjectSchema as BaseModelUncheckedUpdateInputObjectSchema } from './objects/BaseModelUncheckedUpdateInput.schema';

export const BaseModelUpsertOneSchema: z.ZodType<Prisma.BaseModelUpsertArgs> = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema, create: z.union([ BaseModelCreateInputObjectSchema, BaseModelUncheckedCreateInputObjectSchema ]), update: z.union([ BaseModelUpdateInputObjectSchema, BaseModelUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BaseModelUpsertArgs>;

export const BaseModelUpsertOneZodSchema = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema, create: z.union([ BaseModelCreateInputObjectSchema, BaseModelUncheckedCreateInputObjectSchema ]), update: z.union([ BaseModelUpdateInputObjectSchema, BaseModelUncheckedUpdateInputObjectSchema ]) }).strict();