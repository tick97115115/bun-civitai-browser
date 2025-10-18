import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ModelWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelWhereUniqueInput>;
export const ModelWhereUniqueInputObjectZodSchema = makeSchema();
