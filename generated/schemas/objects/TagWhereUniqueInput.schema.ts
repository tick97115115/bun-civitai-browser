import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const TagWhereUniqueInputObjectSchema: z.ZodType<Prisma.TagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagWhereUniqueInput>;
export const TagWhereUniqueInputObjectZodSchema = makeSchema();
