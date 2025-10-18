import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { BaseModelArgsObjectSchema as BaseModelArgsObjectSchema } from './BaseModelArgs.schema';
import { BaseModelTypeArgsObjectSchema as BaseModelTypeArgsObjectSchema } from './BaseModelTypeArgs.schema';
import { ModelVersionFileFindManySchema as ModelVersionFileFindManySchema } from '../findManyModelVersionFile.schema';
import { ModelVersionImageFindManySchema as ModelVersionImageFindManySchema } from '../findManyModelVersionImage.schema';
import { ModelVersionCountOutputTypeArgsObjectSchema as ModelVersionCountOutputTypeArgsObjectSchema } from './ModelVersionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  baseModel: z.union([z.boolean(), z.lazy(() => BaseModelArgsObjectSchema)]).optional(),
  baseModelType: z.union([z.boolean(), z.lazy(() => BaseModelTypeArgsObjectSchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => ModelVersionFileFindManySchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => ModelVersionImageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelVersionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelVersionIncludeObjectSchema: z.ZodType<Prisma.ModelVersionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionInclude>;
export const ModelVersionIncludeObjectZodSchema = makeSchema();
