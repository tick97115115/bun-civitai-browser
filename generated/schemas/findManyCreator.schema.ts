import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './objects/CreatorInclude.schema';
import { CreatorOrderByWithRelationInputObjectSchema as CreatorOrderByWithRelationInputObjectSchema } from './objects/CreatorOrderByWithRelationInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './objects/CreatorWhereInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';
import { CreatorScalarFieldEnumSchema } from './enums/CreatorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CreatorFindManySelectSchema: z.ZodType<Prisma.CreatorSelect> = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CreatorSelect>;

export const CreatorFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CreatorFindManySchema: z.ZodType<Prisma.CreatorFindManyArgs> = z.object({ select: CreatorFindManySelectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CreatorScalarFieldEnumSchema, CreatorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CreatorFindManyArgs>;

export const CreatorFindManyZodSchema = z.object({ select: CreatorFindManySelectSchema.optional(), include: CreatorIncludeObjectSchema.optional(), orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CreatorScalarFieldEnumSchema, CreatorScalarFieldEnumSchema.array()]).optional() }).strict();