import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { ModelTypeCountOutputTypeArgsObjectSchema as ModelTypeCountOutputTypeArgsObjectSchema } from './ModelTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelTypeIncludeObjectSchema: z.ZodType<Prisma.ModelTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeInclude>;
export const ModelTypeIncludeObjectZodSchema = makeSchema();
