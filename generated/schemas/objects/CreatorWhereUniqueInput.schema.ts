import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string().optional()
}).strict();
export const CreatorWhereUniqueInputObjectSchema: z.ZodType<Prisma.CreatorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorWhereUniqueInput>;
export const CreatorWhereUniqueInputObjectZodSchema = makeSchema();
