import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as ModelUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './ModelUncheckedUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateInput>;
export const TagUncheckedUpdateInputObjectZodSchema = makeSchema();
