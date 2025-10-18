import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './objects/BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';

export const BaseModelFindUniqueSchema: z.ZodType<Prisma.BaseModelFindUniqueArgs> = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BaseModelFindUniqueArgs>;

export const BaseModelFindUniqueZodSchema = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema }).strict();