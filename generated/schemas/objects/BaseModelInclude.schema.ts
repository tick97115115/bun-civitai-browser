import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFindManySchema as ModelVersionFindManySchema } from '../findManyModelVersion.schema';
import { BaseModelTypeFindManySchema as BaseModelTypeFindManySchema } from '../findManyBaseModelType.schema';
import { BaseModelCountOutputTypeArgsObjectSchema as BaseModelCountOutputTypeArgsObjectSchema } from './BaseModelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  modelVersions: z.union([z.boolean(), z.lazy(() => ModelVersionFindManySchema)]).optional(),
  baseModelTypes: z.union([z.boolean(), z.lazy(() => BaseModelTypeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BaseModelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BaseModelIncludeObjectSchema: z.ZodType<Prisma.BaseModelInclude> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelInclude>;
export const BaseModelIncludeObjectZodSchema = makeSchema();
