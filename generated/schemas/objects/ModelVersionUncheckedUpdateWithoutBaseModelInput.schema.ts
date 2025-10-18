import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema as ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema } from './ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInput.schema';
import { ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema as ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema } from './ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModelTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  publishedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nsfwLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  files: z.lazy(() => ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema).optional()
}).strict();
export const ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedUpdateWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedUpdateWithoutBaseModelInput>;
export const ModelVersionUncheckedUpdateWithoutBaseModelInputObjectZodSchema = makeSchema();
