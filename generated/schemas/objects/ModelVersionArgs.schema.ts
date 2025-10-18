import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './ModelVersionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelVersionSelectObjectSchema).optional(),
  include: z.lazy(() => ModelVersionIncludeObjectSchema).optional()
}).strict();
export const ModelVersionArgsObjectSchema = makeSchema();
export const ModelVersionArgsObjectZodSchema = makeSchema();
