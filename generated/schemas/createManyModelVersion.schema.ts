import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionCreateManyInputObjectSchema as ModelVersionCreateManyInputObjectSchema } from './objects/ModelVersionCreateManyInput.schema';

export const ModelVersionCreateManySchema: z.ZodType<Prisma.ModelVersionCreateManyArgs> = z.object({ data: z.union([ ModelVersionCreateManyInputObjectSchema, z.array(ModelVersionCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelVersionCreateManyArgs>;

export const ModelVersionCreateManyZodSchema = z.object({ data: z.union([ ModelVersionCreateManyInputObjectSchema, z.array(ModelVersionCreateManyInputObjectSchema) ]),  }).strict();