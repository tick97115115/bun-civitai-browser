import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelSelectObjectSchema as BaseModelSelectObjectSchema } from './BaseModelSelect.schema';
import { BaseModelIncludeObjectSchema as BaseModelIncludeObjectSchema } from './BaseModelInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BaseModelSelectObjectSchema).optional(),
  include: z.lazy(() => BaseModelIncludeObjectSchema).optional()
}).strict();
export const BaseModelArgsObjectSchema = makeSchema();
export const BaseModelArgsObjectZodSchema = makeSchema();
