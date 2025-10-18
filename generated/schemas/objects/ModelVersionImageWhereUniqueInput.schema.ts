import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ModelVersionImageWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelVersionImageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageWhereUniqueInput>;
export const ModelVersionImageWhereUniqueInputObjectZodSchema = makeSchema();
