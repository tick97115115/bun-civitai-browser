import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  modelVersions: z.boolean().optional(),
  baseModelTypes: z.boolean().optional()
}).strict();
export const BaseModelCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BaseModelCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCountOutputTypeSelect>;
export const BaseModelCountOutputTypeSelectObjectZodSchema = makeSchema();
