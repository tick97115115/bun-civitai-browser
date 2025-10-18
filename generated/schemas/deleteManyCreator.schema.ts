import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './objects/CreatorWhereInput.schema';

export const CreatorDeleteManySchema: z.ZodType<Prisma.CreatorDeleteManyArgs> = z.object({ where: CreatorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CreatorDeleteManyArgs>;

export const CreatorDeleteManyZodSchema = z.object({ where: CreatorWhereInputObjectSchema.optional() }).strict();