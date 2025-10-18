import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './objects/CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';

export const CreatorDeleteOneSchema: z.ZodType<Prisma.CreatorDeleteArgs> = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CreatorDeleteArgs>;

export const CreatorDeleteOneZodSchema = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema }).strict();