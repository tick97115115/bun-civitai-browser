import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelUncheckedUpdateManyWithoutTypeNestedInputObjectSchema as ModelUncheckedUpdateManyWithoutTypeNestedInputObjectSchema } from './ModelUncheckedUpdateManyWithoutTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelUncheckedUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
export const ModelTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ModelTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUncheckedUpdateInput>;
export const ModelTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
