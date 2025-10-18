import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  models: z.boolean().optional()
}).strict();
export const ModelTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ModelTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCountOutputTypeSelect>;
export const ModelTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
