import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCountOutputTypeSelectObjectSchema as ModelCountOutputTypeSelectObjectSchema } from './ModelCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeArgsObjectZodSchema = makeSchema();
