import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeSelectObjectSchema as BaseModelTypeSelectObjectSchema } from './objects/BaseModelTypeSelect.schema';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';

export const BaseModelTypeFindUniqueSchema: z.ZodType<Prisma.BaseModelTypeFindUniqueArgs> = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), where: BaseModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeFindUniqueArgs>;

export const BaseModelTypeFindUniqueZodSchema = z.object({ select: BaseModelTypeSelectObjectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), where: BaseModelTypeWhereUniqueInputObjectSchema }).strict();