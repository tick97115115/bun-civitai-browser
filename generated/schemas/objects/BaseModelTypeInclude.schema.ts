import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFindManySchema as ModelVersionFindManySchema } from '../findManyModelVersion.schema';
import { BaseModelArgsObjectSchema as BaseModelArgsObjectSchema } from './BaseModelArgs.schema';
import { BaseModelTypeCountOutputTypeArgsObjectSchema as BaseModelTypeCountOutputTypeArgsObjectSchema } from './BaseModelTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  modelVersions: z.union([z.boolean(), z.lazy(() => ModelVersionFindManySchema)]).optional(),
  baseModel: z.union([z.boolean(), z.lazy(() => BaseModelArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BaseModelTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BaseModelTypeIncludeObjectSchema: z.ZodType<Prisma.BaseModelTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeInclude>;
export const BaseModelTypeIncludeObjectZodSchema = makeSchema();
