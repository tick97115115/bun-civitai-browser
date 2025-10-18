import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileSelectObjectSchema as ModelVersionFileSelectObjectSchema } from './ModelVersionFileSelect.schema';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './ModelVersionFileInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelVersionFileSelectObjectSchema).optional(),
  include: z.lazy(() => ModelVersionFileIncludeObjectSchema).optional()
}).strict();
export const ModelVersionFileArgsObjectSchema = makeSchema();
export const ModelVersionFileArgsObjectZodSchema = makeSchema();
