import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorOrderByWithRelationInputObjectSchema as CreatorOrderByWithRelationInputObjectSchema } from './objects/CreatorOrderByWithRelationInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './objects/CreatorWhereInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';
import { CreatorScalarFieldEnumSchema } from './enums/CreatorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CreatorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CreatorSelect> = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CreatorSelect>;

export const CreatorFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CreatorFindFirstOrThrowSchema: z.ZodType<Prisma.CreatorFindFirstOrThrowArgs> = z.object({ select: CreatorFindFirstOrThrowSelectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CreatorScalarFieldEnumSchema, CreatorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CreatorFindFirstOrThrowArgs>;

export const CreatorFindFirstOrThrowZodSchema = z.object({ select: CreatorFindFirstOrThrowSelectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CreatorScalarFieldEnumSchema, CreatorScalarFieldEnumSchema.array()]).optional() }).strict();