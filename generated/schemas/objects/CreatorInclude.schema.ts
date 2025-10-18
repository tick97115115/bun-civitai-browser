import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { CreatorCountOutputTypeArgsObjectSchema as CreatorCountOutputTypeArgsObjectSchema } from './CreatorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CreatorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CreatorIncludeObjectSchema: z.ZodType<Prisma.CreatorInclude> = makeSchema() as unknown as z.ZodType<Prisma.CreatorInclude>;
export const CreatorIncludeObjectZodSchema = makeSchema();
