import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileUpdateManyMutationInputObjectSchema as ModelVersionFileUpdateManyMutationInputObjectSchema } from './objects/ModelVersionFileUpdateManyMutationInput.schema';
import { ModelVersionFileWhereInputObjectSchema as ModelVersionFileWhereInputObjectSchema } from './objects/ModelVersionFileWhereInput.schema';

export const ModelVersionFileUpdateManySchema: z.ZodType<Prisma.ModelVersionFileUpdateManyArgs> = z.object({ data: ModelVersionFileUpdateManyMutationInputObjectSchema, where: ModelVersionFileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileUpdateManyArgs>;

export const ModelVersionFileUpdateManyZodSchema = z.object({ data: ModelVersionFileUpdateManyMutationInputObjectSchema, where: ModelVersionFileWhereInputObjectSchema.optional() }).strict();