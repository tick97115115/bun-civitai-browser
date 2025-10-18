import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './objects/BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelCreateInputObjectSchema as BaseModelCreateInputObjectSchema } from './objects/BaseModelCreateInput.schema';
import { BaseModelUncheckedCreateInputObjectSchema as BaseModelUncheckedCreateInputObjectSchema } from './objects/BaseModelUncheckedCreateInput.schema';

export const BaseModelCreateOneSchema: z.ZodType<Prisma.BaseModelCreateArgs> = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), data: z.union([BaseModelCreateInputObjectSchema, BaseModelUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BaseModelCreateArgs>;

export const BaseModelCreateOneZodSchema = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), data: z.union([BaseModelCreateInputObjectSchema, BaseModelUncheckedCreateInputObjectSchema]) }).strict();