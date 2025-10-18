import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './objects/ModelVersionWhereInput.schema';

export const ModelVersionDeleteManySchema: z.ZodType<Prisma.ModelVersionDeleteManyArgs> = z.object({ where: ModelVersionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionDeleteManyArgs>;

export const ModelVersionDeleteManyZodSchema = z.object({ where: ModelVersionWhereInputObjectSchema.optional() }).strict();