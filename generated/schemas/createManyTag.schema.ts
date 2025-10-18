import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { TagCreateManyInputObjectSchema as TagCreateManyInputObjectSchema } from './objects/TagCreateManyInput.schema';

export const TagCreateManySchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({ data: z.union([ TagCreateManyInputObjectSchema, z.array(TagCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.TagCreateManyArgs>;

export const TagCreateManyZodSchema = z.object({ data: z.union([ TagCreateManyInputObjectSchema, z.array(TagCreateManyInputObjectSchema) ]),  }).strict();