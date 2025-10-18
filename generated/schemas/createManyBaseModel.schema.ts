import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelCreateManyInputObjectSchema as BaseModelCreateManyInputObjectSchema } from './objects/BaseModelCreateManyInput.schema';

export const BaseModelCreateManySchema: z.ZodType<Prisma.BaseModelCreateManyArgs> = z.object({ data: z.union([ BaseModelCreateManyInputObjectSchema, z.array(BaseModelCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BaseModelCreateManyArgs>;

export const BaseModelCreateManyZodSchema = z.object({ data: z.union([ BaseModelCreateManyInputObjectSchema, z.array(BaseModelCreateManyInputObjectSchema) ]),  }).strict();