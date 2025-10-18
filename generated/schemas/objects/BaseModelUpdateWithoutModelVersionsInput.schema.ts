import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema as BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema } from './BaseModelTypeUpdateManyWithoutBaseModelNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModelTypes: z.lazy(() => BaseModelTypeUpdateManyWithoutBaseModelNestedInputObjectSchema).optional()
}).strict();
export const BaseModelUpdateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateWithoutModelVersionsInput>;
export const BaseModelUpdateWithoutModelVersionsInputObjectZodSchema = makeSchema();
