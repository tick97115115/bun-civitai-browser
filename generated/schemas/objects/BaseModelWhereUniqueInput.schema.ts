import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const BaseModelWhereUniqueInputObjectSchema: z.ZodType<Prisma.BaseModelWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelWhereUniqueInput>;
export const BaseModelWhereUniqueInputObjectZodSchema = makeSchema();
