import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './objects/BaseModelTypeInclude.schema';
import { BaseModelTypeOrderByWithRelationInputObjectSchema as BaseModelTypeOrderByWithRelationInputObjectSchema } from './objects/BaseModelTypeOrderByWithRelationInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './objects/BaseModelTypeWhereInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeScalarFieldEnumSchema } from './enums/BaseModelTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BaseModelTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BaseModelTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeSelect>;

export const BaseModelTypeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    baseModelId: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModel: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BaseModelTypeFindFirstOrThrowSchema: z.ZodType<Prisma.BaseModelTypeFindFirstOrThrowArgs> = z.object({ select: BaseModelTypeFindFirstOrThrowSelectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelTypeScalarFieldEnumSchema, BaseModelTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeFindFirstOrThrowArgs>;

export const BaseModelTypeFindFirstOrThrowZodSchema = z.object({ select: BaseModelTypeFindFirstOrThrowSelectSchema.optional(), include: BaseModelTypeIncludeObjectSchema.optional(), orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelTypeScalarFieldEnumSchema, BaseModelTypeScalarFieldEnumSchema.array()]).optional() }).strict();