import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  models: z.boolean().optional()
}).strict();
export const CreatorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CreatorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCountOutputTypeSelect>;
export const CreatorCountOutputTypeSelectObjectZodSchema = makeSchema();
