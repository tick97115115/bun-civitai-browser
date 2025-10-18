import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './objects/CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';
import { CreatorCreateInputObjectSchema as CreatorCreateInputObjectSchema } from './objects/CreatorCreateInput.schema';
import { CreatorUncheckedCreateInputObjectSchema as CreatorUncheckedCreateInputObjectSchema } from './objects/CreatorUncheckedCreateInput.schema';
import { CreatorUpdateInputObjectSchema as CreatorUpdateInputObjectSchema } from './objects/CreatorUpdateInput.schema';
import { CreatorUncheckedUpdateInputObjectSchema as CreatorUncheckedUpdateInputObjectSchema } from './objects/CreatorUncheckedUpdateInput.schema';

export const CreatorUpsertOneSchema: z.ZodType<Prisma.CreatorUpsertArgs> = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema, create: z.union([ CreatorCreateInputObjectSchema, CreatorUncheckedCreateInputObjectSchema ]), update: z.union([ CreatorUpdateInputObjectSchema, CreatorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CreatorUpsertArgs>;

export const CreatorUpsertOneZodSchema = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), where: CreatorWhereUniqueInputObjectSchema, create: z.union([ CreatorCreateInputObjectSchema, CreatorUncheckedCreateInputObjectSchema ]), update: z.union([ CreatorUpdateInputObjectSchema, CreatorUncheckedUpdateInputObjectSchema ]) }).strict();