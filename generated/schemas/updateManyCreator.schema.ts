import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorUpdateManyMutationInputObjectSchema as CreatorUpdateManyMutationInputObjectSchema } from './objects/CreatorUpdateManyMutationInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './objects/CreatorWhereInput.schema';

export const CreatorUpdateManySchema: z.ZodType<Prisma.CreatorUpdateManyArgs> = z.object({ data: CreatorUpdateManyMutationInputObjectSchema, where: CreatorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CreatorUpdateManyArgs>;

export const CreatorUpdateManyZodSchema = z.object({ data: CreatorUpdateManyMutationInputObjectSchema, where: CreatorWhereInputObjectSchema.optional() }).strict();