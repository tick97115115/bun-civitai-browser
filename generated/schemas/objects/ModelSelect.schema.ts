import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFindManySchema as ModelVersionFindManySchema } from '../findManyModelVersion.schema';
import { TagFindManySchema as TagFindManySchema } from '../findManyTag.schema';
import { CreatorArgsObjectSchema as CreatorArgsObjectSchema } from './CreatorArgs.schema';
import { ModelTypeArgsObjectSchema as ModelTypeArgsObjectSchema } from './ModelTypeArgs.schema';
import { ModelCountOutputTypeArgsObjectSchema as ModelCountOutputTypeArgsObjectSchema } from './ModelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  typeId: z.boolean().optional(),
  nsfw: z.boolean().optional(),
  nsfwLevel: z.boolean().optional(),
  modelVersions: z.union([z.boolean(), z.lazy(() => ModelVersionFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  creator: z.union([z.boolean(), z.lazy(() => CreatorArgsObjectSchema)]).optional(),
  type: z.union([z.boolean(), z.lazy(() => ModelTypeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelSelectObjectSchema: z.ZodType<Prisma.ModelSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelSelect>;
export const ModelSelectObjectZodSchema = makeSchema();
