import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionUpdateManyMutationInputObjectSchema as ModelVersionUpdateManyMutationInputObjectSchema } from './objects/ModelVersionUpdateManyMutationInput.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './objects/ModelVersionWhereInput.schema';

export const ModelVersionUpdateManySchema: z.ZodType<Prisma.ModelVersionUpdateManyArgs> = z.object({ data: ModelVersionUpdateManyMutationInputObjectSchema, where: ModelVersionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionUpdateManyArgs>;

export const ModelVersionUpdateManyZodSchema = z.object({ data: ModelVersionUpdateManyMutationInputObjectSchema, where: ModelVersionWhereInputObjectSchema.optional() }).strict();