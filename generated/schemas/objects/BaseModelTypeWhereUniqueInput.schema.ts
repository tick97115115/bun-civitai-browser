import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const BaseModelTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.BaseModelTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeWhereUniqueInput>;
export const BaseModelTypeWhereUniqueInputObjectZodSchema = makeSchema();
