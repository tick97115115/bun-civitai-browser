import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagSelectObjectSchema: z.ZodType<Prisma.TagSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagSelect>;
export const TagSelectObjectZodSchema = makeSchema();
