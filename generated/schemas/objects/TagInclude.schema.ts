import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagIncludeObjectSchema: z.ZodType<Prisma.TagInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagInclude>;
export const TagIncludeObjectZodSchema = makeSchema();
