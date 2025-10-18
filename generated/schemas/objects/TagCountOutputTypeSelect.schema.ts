import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  models: z.boolean().optional()
}).strict();
export const TagCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCountOutputTypeSelect>;
export const TagCountOutputTypeSelectObjectZodSchema = makeSchema();
