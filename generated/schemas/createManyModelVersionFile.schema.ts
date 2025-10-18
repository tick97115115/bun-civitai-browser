import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileCreateManyInputObjectSchema as ModelVersionFileCreateManyInputObjectSchema } from './objects/ModelVersionFileCreateManyInput.schema';

export const ModelVersionFileCreateManySchema: z.ZodType<Prisma.ModelVersionFileCreateManyArgs> = z.object({ data: z.union([ ModelVersionFileCreateManyInputObjectSchema, z.array(ModelVersionFileCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileCreateManyArgs>;

export const ModelVersionFileCreateManyZodSchema = z.object({ data: z.union([ ModelVersionFileCreateManyInputObjectSchema, z.array(ModelVersionFileCreateManyInputObjectSchema) ]),  }).strict();