import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelOrderByWithRelationInputObjectSchema as BaseModelOrderByWithRelationInputObjectSchema } from './objects/BaseModelOrderByWithRelationInput.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './objects/BaseModelWhereInput.schema';
import { BaseModelWhereUniqueInputObjectSchema as BaseModelWhereUniqueInputObjectSchema } from './objects/BaseModelWhereUniqueInput.schema';
import { BaseModelCountAggregateInputObjectSchema as BaseModelCountAggregateInputObjectSchema } from './objects/BaseModelCountAggregateInput.schema';

export const BaseModelCountSchema: z.ZodType<Prisma.BaseModelCountArgs> = z.object({ orderBy: z.union([BaseModelOrderByWithRelationInputObjectSchema, BaseModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelWhereInputObjectSchema.optional(), cursor: BaseModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BaseModelCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelCountArgs>;

export const BaseModelCountZodSchema = z.object({ orderBy: z.union([BaseModelOrderByWithRelationInputObjectSchema, BaseModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: BaseModelWhereInputObjectSchema.optional(), cursor: BaseModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BaseModelCountAggregateInputObjectSchema ]).optional() }).strict();