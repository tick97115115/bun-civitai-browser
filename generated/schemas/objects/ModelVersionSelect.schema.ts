import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { BaseModelArgsObjectSchema as BaseModelArgsObjectSchema } from './BaseModelArgs.schema';
import { BaseModelTypeArgsObjectSchema as BaseModelTypeArgsObjectSchema } from './BaseModelTypeArgs.schema';
import { ModelVersionFileFindManySchema as ModelVersionFileFindManySchema } from '../findManyModelVersionFile.schema';
import { ModelVersionImageFindManySchema as ModelVersionImageFindManySchema } from '../findManyModelVersionImage.schema';
import { ModelVersionCountOutputTypeArgsObjectSchema as ModelVersionCountOutputTypeArgsObjectSchema } from './ModelVersionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  modelId: z.boolean().optional(),
  name: z.boolean().optional(),
  baseModelId: z.boolean().optional(),
  baseModelTypeId: z.boolean().optional(),
  publishedAt: z.boolean().optional(),
  nsfwLevel: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  baseModel: z.union([z.boolean(), z.lazy(() => BaseModelArgsObjectSchema)]).optional(),
  baseModelType: z.union([z.boolean(), z.lazy(() => BaseModelTypeArgsObjectSchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => ModelVersionFileFindManySchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => ModelVersionImageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelVersionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelVersionSelectObjectSchema: z.ZodType<Prisma.ModelVersionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionSelect>;
export const ModelVersionSelectObjectZodSchema = makeSchema();
