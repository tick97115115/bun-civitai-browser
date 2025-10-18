import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema as ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema } from './ModelVersionUpdateManyWithoutBaseModelTypeNestedInput.schema';
import { BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema as BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema } from './BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema).optional(),
  baseModel: z.lazy(() => BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUpdateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateInput>;
export const BaseModelTypeUpdateInputObjectZodSchema = makeSchema();
