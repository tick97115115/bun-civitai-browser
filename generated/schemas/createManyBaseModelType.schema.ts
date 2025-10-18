import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeCreateManyInputObjectSchema as BaseModelTypeCreateManyInputObjectSchema } from './objects/BaseModelTypeCreateManyInput.schema';

export const BaseModelTypeCreateManySchema: z.ZodType<Prisma.BaseModelTypeCreateManyArgs> = z.object({ data: z.union([ BaseModelTypeCreateManyInputObjectSchema, z.array(BaseModelTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeCreateManyArgs>;

export const BaseModelTypeCreateManyZodSchema = z.object({ data: z.union([ BaseModelTypeCreateManyInputObjectSchema, z.array(BaseModelTypeCreateManyInputObjectSchema) ]),  }).strict();