import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './objects/BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';

export const BaseModelFindUniqueOrThrowSchema: z.ZodType<Prisma.BaseModelFindUniqueOrThrowArgs> = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BaseModelFindUniqueOrThrowArgs>;

export const BaseModelFindUniqueOrThrowZodSchema = z.object({ select: BaseModelSelectObjectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), where: BaseModelWhereUniqueInputObjectSchema }).strict();