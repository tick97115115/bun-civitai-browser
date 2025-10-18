import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ModelVersionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelVersionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionWhereUniqueInput>;
export const ModelVersionWhereUniqueInputObjectZodSchema = makeSchema();
