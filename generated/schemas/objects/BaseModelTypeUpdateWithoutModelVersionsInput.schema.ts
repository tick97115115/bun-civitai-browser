import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema as BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema } from './BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModel: z.lazy(() => BaseModelUpdateOneRequiredWithoutBaseModelTypesNestedInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUpdateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateWithoutModelVersionsInput>;
export const BaseModelTypeUpdateWithoutModelVersionsInputObjectZodSchema = makeSchema();
