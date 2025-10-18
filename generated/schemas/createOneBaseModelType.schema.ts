import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeSelectObjectSchema as BaseModelTypeSelectObjectSchema } from './objects/BaseModelTypeSelect.schema';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeCreateInputObjectSchema as BaseModelTypeCreateInputObjectSchema } from './objects/BaseModelTypeCreateInput.schema';
import { BaseModelTypeUncheckedCreateInputObjectSchema as BaseModelTypeUncheckedCreateInputObjectSchema } from './objects/BaseModelTypeUncheckedCreateInput.schema';

export const BaseModelTypeCreateOneSchema: z.ZodType<Prisma.BaseModelTypeCreateArgs> = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), data: z.union([BaseModelTypeCreateInputObjectSchema, BaseModelTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeCreateArgs>;

export const BaseModelTypeCreateOneZodSchema = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), data: z.union([BaseModelTypeCreateInputObjectSchema, BaseModelTypeUncheckedCreateInputObjectSchema]) }).strict();