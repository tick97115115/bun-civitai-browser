import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCountOutputTypeSelectObjectSchema as BaseModelTypeCountOutputTypeSelectObjectSchema } from './BaseModelTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BaseModelTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BaseModelTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const BaseModelTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
