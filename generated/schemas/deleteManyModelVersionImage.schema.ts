import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageWhereInputObjectSchema as ModelVersionImageWhereInputObjectSchema } from './objects/ModelVersionImageWhereInput.schema';

export const ModelVersionImageDeleteManySchema: z.ZodType<Prisma.ModelVersionImageDeleteManyArgs> = z.object({ where: ModelVersionImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageDeleteManyArgs>;

export const ModelVersionImageDeleteManyZodSchema = z.object({ where: ModelVersionImageWhereInputObjectSchema.optional() }).strict();