import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { CreatorCreateManyInputObjectSchema as CreatorCreateManyInputObjectSchema } from './objects/CreatorCreateManyInput.schema';

export const CreatorCreateManySchema: z.ZodType<Prisma.CreatorCreateManyArgs> = z.object({ data: z.union([ CreatorCreateManyInputObjectSchema, z.array(CreatorCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.CreatorCreateManyArgs>;

export const CreatorCreateManyZodSchema = z.object({ data: z.union([ CreatorCreateManyInputObjectSchema, z.array(CreatorCreateManyInputObjectSchema) ]),  }).strict();