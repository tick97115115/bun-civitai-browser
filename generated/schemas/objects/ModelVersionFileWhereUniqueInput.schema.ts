import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ModelVersionFileWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelVersionFileWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileWhereUniqueInput>;
export const ModelVersionFileWhereUniqueInputObjectZodSchema = makeSchema();
