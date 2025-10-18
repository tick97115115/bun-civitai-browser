import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './objects/CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorCreateInputObjectSchema as CreatorCreateInputObjectSchema } from './objects/CreatorCreateInput.schema';
import { CreatorUncheckedCreateInputObjectSchema as CreatorUncheckedCreateInputObjectSchema } from './objects/CreatorUncheckedCreateInput.schema';

export const CreatorCreateOneSchema: z.ZodType<Prisma.CreatorCreateArgs> = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), data: z.union([CreatorCreateInputObjectSchema, CreatorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CreatorCreateArgs>;

export const CreatorCreateOneZodSchema = z.object({ select: CreatorSelectObjectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), data: z.union([CreatorCreateInputObjectSchema, CreatorUncheckedCreateInputObjectSchema]) }).strict();