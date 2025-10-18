import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './objects/ModelOrderByWithRelationInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';
import { ModelScalarFieldEnumSchema } from './enums/ModelScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelFindManySelectSchema: z.ZodType<Prisma.ModelSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    creatorId: z.boolean().optional(),
    typeId: z.boolean().optional(),
    nsfw: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    tags: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    creator: z.boolean().optional(),
    type: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelSelect>;

export const ModelFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    creatorId: z.boolean().optional(),
    typeId: z.boolean().optional(),
    nsfw: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    tags: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    creator: z.boolean().optional(),
    type: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ModelFindManySchema: z.ZodType<Prisma.ModelFindManyArgs> = z.object({ select: ModelFindManySelectSchema.optional(), include: ModelIncludeObjectSchema.optional(), orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelScalarFieldEnumSchema, ModelScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelFindManyArgs>;

export const ModelFindManyZodSchema = z.object({ select: ModelFindManySelectSchema.optional(), include: ModelIncludeObjectSchema.optional(), orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelScalarFieldEnumSchema, ModelScalarFieldEnumSchema.array()]).optional() }).strict();