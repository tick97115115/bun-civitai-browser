import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorOrderByWithRelationInputObjectSchema as CreatorOrderByWithRelationInputObjectSchema } from './objects/CreatorOrderByWithRelationInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './objects/CreatorWhereInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './objects/CreatorWhereUniqueInput.schema';
import { CreatorCountAggregateInputObjectSchema as CreatorCountAggregateInputObjectSchema } from './objects/CreatorCountAggregateInput.schema';

export const CreatorCountSchema: z.ZodType<Prisma.CreatorCountArgs> = z.object({ orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CreatorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CreatorCountArgs>;

export const CreatorCountZodSchema = z.object({ orderBy: z.union([CreatorOrderByWithRelationInputObjectSchema, CreatorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CreatorWhereInputObjectSchema.optional(), cursor: CreatorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CreatorCountAggregateInputObjectSchema ]).optional() }).strict();