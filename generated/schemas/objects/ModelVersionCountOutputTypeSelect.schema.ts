import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  files: z.boolean().optional(),
  images: z.boolean().optional()
}).strict();
export const ModelVersionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ModelVersionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCountOutputTypeSelect>;
export const ModelVersionCountOutputTypeSelectObjectZodSchema = makeSchema();
