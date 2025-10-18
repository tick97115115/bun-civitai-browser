import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './ModelVersionImageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelVersionImageSelectObjectSchema).optional(),
  include: z.lazy(() => ModelVersionImageIncludeObjectSchema).optional()
}).strict();
export const ModelVersionImageArgsObjectSchema = makeSchema();
export const ModelVersionImageArgsObjectZodSchema = makeSchema();
