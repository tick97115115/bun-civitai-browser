import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutModelNestedInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutModelNestedInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutModelNestedInput.schema';
import { TagUncheckedUpdateManyWithoutModelsNestedInputObjectSchema as TagUncheckedUpdateManyWithoutModelsNestedInputObjectSchema } from './TagUncheckedUpdateManyWithoutModelsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  creatorId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nsfw: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  nsfwLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutModelsNestedInputObjectSchema).optional()
}).strict();
export const ModelUncheckedUpdateWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUncheckedUpdateWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedUpdateWithoutTypeInput>;
export const ModelUncheckedUpdateWithoutTypeInputObjectZodSchema = makeSchema();
