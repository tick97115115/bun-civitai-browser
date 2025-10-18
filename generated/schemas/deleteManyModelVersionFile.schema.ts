import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileWhereInputObjectSchema as ModelVersionFileWhereInputObjectSchema } from './objects/ModelVersionFileWhereInput.schema';

export const ModelVersionFileDeleteManySchema: z.ZodType<Prisma.ModelVersionFileDeleteManyArgs> = z.object({ where: ModelVersionFileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileDeleteManyArgs>;

export const ModelVersionFileDeleteManyZodSchema = z.object({ where: ModelVersionFileWhereInputObjectSchema.optional() }).strict();