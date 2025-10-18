import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageCreateManyInputObjectSchema as ModelVersionImageCreateManyInputObjectSchema } from './objects/ModelVersionImageCreateManyInput.schema';

export const ModelVersionImageCreateManySchema: z.ZodType<Prisma.ModelVersionImageCreateManyArgs> = z.object({ data: z.union([ ModelVersionImageCreateManyInputObjectSchema, z.array(ModelVersionImageCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageCreateManyArgs>;

export const ModelVersionImageCreateManyZodSchema = z.object({ data: z.union([ ModelVersionImageCreateManyInputObjectSchema, z.array(ModelVersionImageCreateManyInputObjectSchema) ]),  }).strict();