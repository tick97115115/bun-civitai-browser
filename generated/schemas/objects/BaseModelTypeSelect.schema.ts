import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFindManySchema as ModelVersionFindManySchema } from '../findManyModelVersion.schema';
import { BaseModelArgsObjectSchema as BaseModelArgsObjectSchema } from './BaseModelArgs.schema';
import { BaseModelTypeCountOutputTypeArgsObjectSchema as BaseModelTypeCountOutputTypeArgsObjectSchema } from './BaseModelTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  baseModelId: z.boolean().optional(),
  modelVersions: z.union([z.boolean(), z.lazy(() => ModelVersionFindManySchema)]).optional(),
  baseModel: z.union([z.boolean(), z.lazy(() => BaseModelArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BaseModelTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BaseModelTypeSelectObjectSchema: z.ZodType<Prisma.BaseModelTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeSelect>;
export const BaseModelTypeSelectObjectZodSchema = makeSchema();
