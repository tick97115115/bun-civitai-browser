import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorCountOutputTypeSelectObjectSchema as CreatorCountOutputTypeSelectObjectSchema } from './CreatorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CreatorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CreatorCountOutputTypeArgsObjectSchema = makeSchema();
export const CreatorCountOutputTypeArgsObjectZodSchema = makeSchema();
