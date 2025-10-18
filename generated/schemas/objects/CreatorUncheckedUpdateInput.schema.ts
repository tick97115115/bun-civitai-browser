import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ModelUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema as ModelUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './ModelUncheckedUpdateManyWithoutCreatorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  models: z.lazy(() => ModelUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema).optional()
}).strict();
export const CreatorUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CreatorUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUncheckedUpdateInput>;
export const CreatorUncheckedUpdateInputObjectZodSchema = makeSchema();
