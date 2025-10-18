import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeCountOutputTypeSelectObjectSchema as ModelTypeCountOutputTypeSelectObjectSchema } from './ModelTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ModelTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const ModelTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
