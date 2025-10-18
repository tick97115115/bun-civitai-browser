import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCountOutputTypeSelectObjectSchema as BaseModelCountOutputTypeSelectObjectSchema } from './BaseModelCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BaseModelCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BaseModelCountOutputTypeArgsObjectSchema = makeSchema();
export const BaseModelCountOutputTypeArgsObjectZodSchema = makeSchema();
