import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './objects/CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';

export const CreatorFindUniqueOrThrowSchema: z.ZodType<Prisma.CreatorFindUniqueOrThrowArgs> = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CreatorFindUniqueOrThrowArgs>;

export const CreatorFindUniqueOrThrowZodSchema = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema }).strict();