import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './ModelTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelTypeSelectObjectSchema).optional(),
  include: z.lazy(() => ModelTypeIncludeObjectSchema).optional()
}).strict();
export const ModelTypeArgsObjectSchema = makeSchema();
export const ModelTypeArgsObjectZodSchema = makeSchema();
