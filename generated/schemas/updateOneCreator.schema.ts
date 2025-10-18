import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './objects/CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorUpdateInputObjectSchema as CreatorUpdateInputObjectSchema } from './objects/CreatorUpdateInput.schema';
import { CreatorUncheckedUpdateInputObjectSchema as CreatorUncheckedUpdateInputObjectSchema } from './objects/CreatorUncheckedUpdateInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';

export const CreatorUpdateOneSchema: z.ZodType<Prisma.CreatorUpdateArgs> = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), data: z.union([CreatorUpdateInputObjectSchema, CreatorUncheckedUpdateInputObjectSchema]), where: CreatorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CreatorUpdateArgs>;

export const CreatorUpdateOneZodSchema = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), data: z.union([CreatorUpdateInputObjectSchema, CreatorUncheckedUpdateInputObjectSchema]), where: CreatorWhereUniqueInputObjectSchema }).strict();