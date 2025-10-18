import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorSelectObjectSchema as CreatorSelectObjectSchema } from './CreatorSelect.schema';
import { CreatorIncludeObjectSchema as CreatorIncludeObjectSchema } from './CreatorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CreatorSelectObjectSchema).optional(),
  include: z.lazy(() => CreatorIncludeObjectSchema).optional()
}).strict();
export const CreatorArgsObjectSchema = makeSchema();
export const CreatorArgsObjectZodSchema = makeSchema();
