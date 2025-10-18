import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  modelVersions: z.boolean().optional()
}).strict();
export const BaseModelTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BaseModelTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCountOutputTypeSelect>;
export const BaseModelTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
