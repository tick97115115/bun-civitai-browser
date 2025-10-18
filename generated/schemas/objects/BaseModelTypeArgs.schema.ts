import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeSelectObjectSchema as BaseModelTypeSelectObjectSchema } from './BaseModelTypeSelect.schema';
import { BaseModelTypeIncludeObjectSchema as BaseModelTypeIncludeObjectSchema } from './BaseModelTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BaseModelTypeSelectObjectSchema).optional(),
  include: z.lazy(() => BaseModelTypeIncludeObjectSchema).optional()
}).strict();
export const BaseModelTypeArgsObjectSchema = makeSchema();
export const BaseModelTypeArgsObjectZodSchema = makeSchema();
