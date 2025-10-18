import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeOrderByWithRelationInputObjectSchema as BaseModelTypeOrderByWithRelationInputObjectSchema } from './objects/BaseModelTypeOrderByWithRelationInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './objects/BaseModelTypeWhereInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeScalarFieldEnumSchema } from './enums/BaseModelTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BaseModelTypeFindFirstSelectSchema: z.ZodType<Prisma.BaseModelTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeSelect>;

export const BaseModelTypeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BaseModelTypeFindFirstSchema: z.ZodType<Prisma.BaseModelTypeFindFirstArgs> = z.object({ select: BaseModelTypeFindFirstSelectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelTypeScalarFieldEnumSchema, BaseModelTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeFindFirstArgs>;

export const BaseModelTypeFindFirstZodSchema = z.object({ select: BaseModelTypeFindFirstSelectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelTypeScalarFieldEnumSchema, BaseModelTypeScalarFieldEnumSchema.array()]).optional() }).strict();