import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeOrderByWithRelationInputObjectSchema as ModelTypeOrderByWithRelationInputObjectSchema } from './objects/ModelTypeOrderByWithRelationInput.schema';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './objects/ModelTypeWhereInput.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';
import { ModelTypeScalarFieldEnumSchema } from './enums/ModelTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ModelTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelTypeSelect>;

export const ModelTypeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ModelTypeFindFirstOrThrowSchema: z.ZodType<Prisma.ModelTypeFindFirstOrThrowArgs> = z.object({ select: ModelTypeFindFirstOrThrowSelectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), orderBy: z.union([ModelTypeOrderByWithRelationInputObjectSchema, ModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelTypeWhereInputObjectSchema.optional(), cursor: ModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelTypeScalarFieldEnumSchema, ModelTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelTypeFindFirstOrThrowArgs>;

export const ModelTypeFindFirstOrThrowZodSchema = z.object({ select: ModelTypeFindFirstOrThrowSelectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), orderBy: z.union([ModelTypeOrderByWithRelationInputObjectSchema, ModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelTypeWhereInputObjectSchema.optional(), cursor: ModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelTypeScalarFieldEnumSchema, ModelTypeScalarFieldEnumSchema.array()]).optional() }).strict();