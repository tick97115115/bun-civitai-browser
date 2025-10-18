import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './objects/ModelVersionFileInclude.schema';
import { ModelVersionFileOrderByWithRelationInputObjectSchema as ModelVersionFileOrderByWithRelationInputObjectSchema } from './objects/ModelVersionFileOrderByWithRelationInput.schema';
import { ModelVersionFileWhereInputObjectSchema as ModelVersionFileWhereInputObjectSchema } from './objects/ModelVersionFileWhereInput.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './objects/ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileScalarFieldEnumSchema } from './enums/ModelVersionFileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelVersionFileFindManySelectSchema: z.ZodType<Prisma.ModelVersionFileSelect> = z.object({
    id: z.boolean().optional(),
    sizeKB: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    downloadUrl: z.boolean().optional(),
    modelVersionId: z.boolean().optional(),
    modelVersion: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileSelect>;

export const ModelVersionFileFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    sizeKB: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    downloadUrl: z.boolean().optional(),
    modelVersionId: z.boolean().optional(),
    modelVersion: z.boolean().optional()
  }).strict();

export const ModelVersionFileFindManySchema: z.ZodType<Prisma.ModelVersionFileFindManyArgs> = z.object({ select: ModelVersionFileFindManySelectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionFileOrderByWithRelationInputObjectSchema, ModelVersionFileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionFileWhereInputObjectSchema.optional(), cursor: ModelVersionFileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionFileScalarFieldEnumSchema, ModelVersionFileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileFindManyArgs>;

export const ModelVersionFileFindManyZodSchema = z.object({ select: ModelVersionFileFindManySelectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), orderBy: z.union([ModelVersionFileOrderByWithRelationInputObjectSchema, ModelVersionFileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionFileWhereInputObjectSchema.optional(), cursor: ModelVersionFileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelVersionFileScalarFieldEnumSchema, ModelVersionFileScalarFieldEnumSchema.array()]).optional() }).strict();