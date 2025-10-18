import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const BaseModelCreateManyInputObjectSchema: z.ZodType<Prisma.BaseModelCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateManyInput>;
export const BaseModelCreateManyInputObjectZodSchema = makeSchema();
