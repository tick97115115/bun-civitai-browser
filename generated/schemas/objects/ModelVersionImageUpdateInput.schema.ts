import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateOneRequiredWithoutImagesNestedInputObjectSchema as ModelVersionUpdateOneRequiredWithoutImagesNestedInputObjectSchema } from './ModelVersionUpdateOneRequiredWithoutImagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nsfwLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  width: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  height: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersion: z.lazy(() => ModelVersionUpdateOneRequiredWithoutImagesNestedInputObjectSchema).optional()
}).strict();
export const ModelVersionImageUpdateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUpdateInput>;
export const ModelVersionImageUpdateInputObjectZodSchema = makeSchema();
