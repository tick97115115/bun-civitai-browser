import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema as ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema } from './ModelVersionUpdateManyWithoutBaseModelNestedInput.schema';
import { BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema as BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema } from './BaseModelTypeUpdateManyWithoutBaseModelNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema).optional(),
  baseModelTypes: z.lazy(() => BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema).optional()
}).strict();
export const BaseModelUpdateInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateInput>;
export const BaseModelUpdateInputObjectZodSchema = makeSchema();
