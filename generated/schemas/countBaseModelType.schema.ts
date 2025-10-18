import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeOrderByWithRelationInputObjectSchema as BaseModelTypeOrderByWithRelationInputObjectSchema } from './objects/BaseModelTypeOrderByWithRelationInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './objects/BaseModelTypeWhereInput.schema';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './objects/BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeCountAggregateInputObjectSchema as BaseModelTypeCountAggregateInputObjectSchema } from './objects/BaseModelTypeCountAggregateInput.schema';

export const BaseModelTypeCountSchema: z.ZodType<Prisma.BaseModelTypeCountArgs> = z.object({ orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BaseModelTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeCountArgs>;

export const BaseModelTypeCountZodSchema = z.object({ orderBy: z.union([BaseModelTypeOrderByWithRelationInputObjectSchema, BaseModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelTypeWhereInputObjectSchema.optional(), cursor: BaseModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BaseModelTypeCountAggregateInputObjectSchema ]).optional() }).strict();