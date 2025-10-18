import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema as ModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutModelVersionsNestedInput.schema';
import { BaseModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema as BaseModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema } from './BaseModelUpdateOneRequiredWithoutModelVersionsNestedInput.schema';
import { ModelVersionFileUpdateManyWithoutModelVersionNestedInputObjectSchema as ModelVersionFileUpdateManyWithoutModelVersionNestedInputObjectSchema } from './ModelVersionFileUpdateManyWithoutModelVersionNestedInput.schema';
import { ModelVersionImageUpdateManyWithoutModelVersionNestedInputObjectSchema as ModelVersionImageUpdateManyWithoutModelVersionNestedInputObjectSchema } from './ModelVersionImageUpdateManyWithoutModelVersionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nsfwLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema).optional(),
  baseModel: z.lazy(() => BaseModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema).optional(),
  files: z.lazy(() => ModelVersionFileUpdateManyWithoutModelVersionNestedInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageUpdateManyWithoutModelVersionNestedInputObjectSchema).optional()
}).strict();
export const ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateWithoutBaseModelTypeInput>;
export const ModelVersionUpdateWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
