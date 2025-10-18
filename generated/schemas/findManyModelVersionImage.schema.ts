import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageOrderByWithRelationInputObjectSchema as ModelVersionImageOrderByWithRelationInputObjectSchema } from './objects/ModelVersionImageOrderByWithRelationInput.schema';
import { ModelVersionImageWhereInputObjectSchema as ModelVersionImageWhereInputObjectSchema } from './objects/ModelVersionImageWhereInput.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './objects/ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageScalarFieldEnumSchema } from './enums/ModelVersionImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelVersionImageFindManySelectSchema: z.ZodType<Prisma.ModelVersionImageSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    width: z.boolean().optional(),
    height: z.boolean().optional(),
    hash: z.boolean().optional(),
    type: z.boolean().optional(),
    modelVersionId: z.boolean().optional(),
    modelVersion: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageSelect>;

export const ModelVersionImageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    nsfwLevel: z.boolean().optional(),
    width: z.boolean().optional(),
    height: z.boolean().optional(),
    hash: z.boolean().optional(),
    type: z.boolean().optional(),
    modelVersionId: z.boolean().optional(),
    modelVersion: z.boolean().optional()
  }).strict();

export const ModelVersionImageFindManySchema: z.ZodType<Prisma.ModelVersionImageFindManyArgs> = z.object({ select: ModelVersionImageFindManySelectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionImageOrderByWithRelationInputObjectSchema, ModelVersionImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionImageWhereInputObjectSchema.optional(), cursor: ModelVersionImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionImageScalarFieldEnumSchema, ModelVersionImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageFindManyArgs>;

export const ModelVersionImageFindManyZodSchema = z.object({ select: ModelVersionImageFindManySelectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionImageOrderByWithRelationInputObjectSchema, ModelVersionImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionImageWhereInputObjectSchema.optional(), cursor: ModelVersionImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionImageScalarFieldEnumSchema, ModelVersionImageScalarFieldEnumSchema.array()]).optional() }).strict();