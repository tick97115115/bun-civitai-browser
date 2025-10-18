import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagCountOutputTypeSelectObjectSchema as TagCountOutputTypeSelectObjectSchema } from './TagCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TagCountOutputTypeArgsObjectSchema = makeSchema();
export const TagCountOutputTypeArgsObjectZodSchema = makeSchema();
