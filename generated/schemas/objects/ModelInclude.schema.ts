import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFindManySchema as ModelVersionFindManySchema } from '../findManyModelVersion.schema';
import { TagFindManySchema as TagFindManySchema } from '../findManyTag.schema';
import { CreatorArgsObjectSchema as CreatorArgsObjectSchema } from './CreatorArgs.schema';
import { ModelTypeArgsObjectSchema as ModelTypeArgsObjectSchema } from './ModelTypeArgs.schema';
import { ModelCountOutputTypeArgsObjectSchema as ModelCountOutputTypeArgsObjectSchema } from './ModelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  modelVersions: z.union([z.boolean(), z.lazy(() => ModelVersionFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
  creator: z.union([z.boolean(), z.lazy(() => CreatorArgsObjectSchema)]).optional(),
  type: z.union([z.boolean(), z.lazy(() => ModelTypeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelIncludeObjectSchema: z.ZodType<Prisma.ModelInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelInclude>;
export const ModelIncludeObjectZodSchema = makeSchema();
