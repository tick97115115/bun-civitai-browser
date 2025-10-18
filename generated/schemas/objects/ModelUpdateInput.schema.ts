import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateManyWithoutModelNestedInputObjectSchema as ModelVersionUpdateManyWithoutModelNestedInputObjectSchema } from './ModelVersionUpdateManyWithoutModelNestedInput.schema';
import { TagUpdateManyWithoutModelsNestedInputObjectSchema as TagUpdateManyWithoutModelsNestedInputObjectSchema } from './TagUpdateManyWithoutModelsNestedInput.schema';
import { CreatorUpdateOneWithoutModelsNestedInputObjectSchema as CreatorUpdateOneWithoutModelsNestedInputObjectSchema } from './CreatorUpdateOneWithoutModelsNestedInput.schema';
import { ModelTypeUpdateOneRequiredWithoutModelsNestedInputObjectSchema as ModelTypeUpdateOneRequiredWithoutModelsNestedInputObjectSchema } from './ModelTypeUpdateOneRequiredWithoutModelsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nsfw: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  nsfwLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutModelsNestedInputObjectSchema).optional(),
  creator: z.lazy(() => CreatorUpdateOneWithoutModelsNestedInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeUpdateOneRequiredWithoutModelsNestedInputObjectSchema).optional()
}).strict();
export const ModelUpdateInputObjectSchema: z.ZodType<Prisma.ModelUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateInput>;
export const ModelUpdateInputObjectZodSchema = makeSchema();
