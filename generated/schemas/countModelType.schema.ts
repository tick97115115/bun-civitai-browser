import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeOrderByWithRelationInputObjectSchema as ModelTypeOrderByWithRelationInputObjectSchema } from './objects/ModelTypeOrderByWithRelationInput.schema';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './objects/ModelTypeWhereInput.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';
import { ModelTypeCountAggregateInputObjectSchema as ModelTypeCountAggregateInputObjectSchema } from './objects/ModelTypeCountAggregateInput.schema';

export const ModelTypeCountSchema: z.ZodType<Prisma.ModelTypeCountArgs> = z.object({ orderBy: z.union([ModelTypeOrderByWithRelationInputObjectSchema, ModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelTypeWhereInputObjectSchema.optional(), cursor: ModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelTypeCountArgs>;

export const ModelTypeCountZodSchema = z.object({ orderBy: z.union([ModelTypeOrderByWithRelationInputObjectSchema, ModelTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelTypeWhereInputObjectSchema.optional(), cursor: ModelTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelTypeCountAggregateInputObjectSchema ]).optional() }).strict();