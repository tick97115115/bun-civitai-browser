import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { ModelTypeCountOutputTypeArgsObjectSchema as ModelTypeCountOutputTypeArgsObjectSchema } from './ModelTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelTypeSelectObjectSchema: z.ZodType<Prisma.ModelTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeSelect>;
export const ModelTypeSelectObjectZodSchema = makeSchema();
