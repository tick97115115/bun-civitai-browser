import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionOrderByWithRelationInputObjectSchema as ModelVersionOrderByWithRelationInputObjectSchema } from './objects/ModelVersionOrderByWithRelationInput.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './objects/ModelVersionWhereInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';
import { ModelVersionCountAggregateInputObjectSchema as ModelVersionCountAggregateInputObjectSchema } from './objects/ModelVersionCountAggregateInput.schema';

export const ModelVersionCountSchema: z.ZodType<Prisma.ModelVersionCountArgs> = z.object({ orderBy: z.union([ModelVersionOrderByWithRelationInputObjectSchema, ModelVersionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionWhereInputObjectSchema.optional(), cursor: ModelVersionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelVersionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionCountArgs>;

export const ModelVersionCountZodSchema = z.object({ orderBy: z.union([ModelVersionOrderByWithRelationInputObjectSchema, ModelVersionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelVersionWhereInputObjectSchema.optional(), cursor: ModelVersionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelVersionCountAggregateInputObjectSchema ]).optional() }).strict();