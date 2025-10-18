import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './objects/ModelTypeWhereInput.schema';

export const ModelTypeDeleteManySchema: z.ZodType<Prisma.ModelTypeDeleteManyArgs> = z.object({ where: ModelTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelTypeDeleteManyArgs>;

export const ModelTypeDeleteManyZodSchema = z.object({ where: ModelTypeWhereInputObjectSchema.optional() }).strict();