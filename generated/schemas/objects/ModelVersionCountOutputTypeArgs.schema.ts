import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCountOutputTypeSelectObjectSchema as ModelVersionCountOutputTypeSelectObjectSchema } from './ModelVersionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelVersionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ModelVersionCountOutputTypeArgsObjectSchema = makeSchema();
export const ModelVersionCountOutputTypeArgsObjectZodSchema = makeSchema();
