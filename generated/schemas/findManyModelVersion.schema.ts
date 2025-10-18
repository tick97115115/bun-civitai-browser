import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionOrderByWithRelationInputObjectSchema as ModelVersionOrderByWithRelationInputObjectSchema } from './objects/ModelVersionOrderByWithRelationInput.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './objects/ModelVersionWhereInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';
import { ModelVersionScalarFieldEnumSchema } from './enums/ModelVersionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelVersionFindManySelectSchema: z.ZodType<Prisma.ModelVersionSelect> = z.object({
    id: z.boolean().optional(),
    modelId: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    baseModelTypeId: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    model: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    baseModelType: z.boolean().optional(),
    files: z.boolean().optional(),
    images: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelVersionSelect>;

export const ModelVersionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    modelId: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    baseModelTypeId: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    model: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    baseModelType: z.boolean().optional(),
    files: z.boolean().optional(),
    images: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ModelVersionFindManySchema: z.ZodType<Prisma.ModelVersionFindManyArgs> = z.object({ select: ModelVersionFindManySelectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionOrderByWithRelationInputObjectSchema, ModelVersionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionWhereInputObjectSchema.optional(), cursor: ModelVersionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionScalarFieldEnumSchema, ModelVersionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionFindManyArgs>;

export const ModelVersionFindManyZodSchema = z.object({ select: ModelVersionFindManySelectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionOrderByWithRelationInputObjectSchema, ModelVersionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionWhereInputObjectSchema.optional(), cursor: ModelVersionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionScalarFieldEnumSchema, ModelVersionScalarFieldEnumSchema.array()]).optional() }).strict();