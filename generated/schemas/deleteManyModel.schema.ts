import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';

export const ModelDeleteManySchema: z.ZodType<Prisma.ModelDeleteManyArgs> = z.object({ where: ModelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelDeleteManyArgs>;

export const ModelDeleteManyZodSchema = z.object({ where: ModelWhereInputObjectSchema.optional() }).strict();