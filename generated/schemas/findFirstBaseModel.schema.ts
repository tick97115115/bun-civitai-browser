import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './objects/BaseModelInclude.schema';
import { BaseModelOrderByWithRelationInputObjectSchema as BaseModelOrderByWithRelationInputObjectSchema } from './objects/BaseModelOrderByWithRelationInput.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './objects/BaseModelWhereInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';
import { BaseModelScalarFieldEnumSchema } from './enums/BaseModelScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BaseModelFindFirstSelectSchema: z.ZodType<Prisma.BaseModelSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModelTypes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BaseModelSelect>;

export const BaseModelFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    modelVersions: z.boolean().optional(),
    baseModelTypes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BaseModelFindFirstSchema: z.ZodType<Prisma.BaseModelFindFirstArgs> = z.object({ select: BaseModelFindFirstSelectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), orderBy: z.union([BaseModelOrderByWithRelationInputObjectSchema, BaseModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelWhereInputObjectSchema.optional(), cursor: BaseModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelScalarFieldEnumSchema, BaseModelScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelFindFirstArgs>;

export const BaseModelFindFirstZodSchema = z.object({ select: BaseModelFindFirstSelectSchema.optional(), include: BaseModelIncludeObjectSchema.optional(), orderBy: z.union([BaseModelOrderByWithRelationInputObjectSchema, BaseModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelWhereInputObjectSchema.optional(), cursor: BaseModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BaseModelScalarFieldEnumSchema, BaseModelScalarFieldEnumSchema.array()]).optional() }).strict();