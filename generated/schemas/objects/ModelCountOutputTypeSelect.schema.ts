import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  modelVersions: z.boolean().optional(),
  tags: z.boolean().optional()
}).strict();
export const ModelCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ModelCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelCountOutputTypeSelect>;
export const ModelCountOutputTypeSelectObjectZodSchema = makeSchema();
