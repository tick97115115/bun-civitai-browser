import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateOneRequiredWithoutFilesNestedInputObjectSchema as ModelVersionUpdateOneRequiredWithoutFilesNestedInputObjectSchema } from './ModelVersionUpdateOneRequiredWithoutFilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  sizeKB: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  downloadUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersion: z.lazy(() => ModelVersionUpdateOneRequiredWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const ModelVersionFileUpdateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUpdateInput>;
export const ModelVersionFileUpdateInputObjectZodSchema = makeSchema();
