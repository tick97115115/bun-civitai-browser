import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeCreateManyInputObjectSchema as ModelTypeCreateManyInputObjectSchema } from './objects/ModelTypeCreateManyInput.schema';

export const ModelTypeCreateManySchema: z.ZodType<Prisma.ModelTypeCreateManyArgs> = z.object({ data: z.union([ ModelTypeCreateManyInputObjectSchema, z.array(ModelTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelTypeCreateManyArgs>;

export const ModelTypeCreateManyZodSchema = z.object({ data: z.union([ ModelTypeCreateManyInputObjectSchema, z.array(ModelTypeCreateManyInputObjectSchema) ]),  }).strict();