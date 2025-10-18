import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeUpdateManyMutationInputObjectSchema as ModelTypeUpdateManyMutationInputObjectSchema } from './objects/ModelTypeUpdateManyMutationInput.schema';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './objects/ModelTypeWhereInput.schema';

export const ModelTypeUpdateManySchema: z.ZodType<Prisma.ModelTypeUpdateManyArgs> = z.object({ data: ModelTypeUpdateManyMutationInputObjectSchema, where: ModelTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelTypeUpdateManyArgs>;

export const ModelTypeUpdateManyZodSchema = z.object({ data: ModelTypeUpdateManyMutationInputObjectSchema, where: ModelTypeWhereInputObjectSchema.optional() }).strict();