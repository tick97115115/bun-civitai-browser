import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageUpdateManyMutationInputObjectSchema as ModelVersionImageUpdateManyMutationInputObjectSchema } from './objects/ModelVersionImageUpdateManyMutationInput.schema';
import { ModelVersionImageWhereInputObjectSchema as ModelVersionImageWhereInputObjectSchema } from './objects/ModelVersionImageWhereInput.schema';

export const ModelVersionImageUpdateManySchema: z.ZodType<Prisma.ModelVersionImageUpdateManyArgs> = z.object({ data: ModelVersionImageUpdateManyMutationInputObjectSchema, where: ModelVersionImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageUpdateManyArgs>;

export const ModelVersionImageUpdateManyZodSchema = z.object({ data: ModelVersionImageUpdateManyMutationInputObjectSchema, where: ModelVersionImageWhereInputObjectSchema.optional() }).strict();