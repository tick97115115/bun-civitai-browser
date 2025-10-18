import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModelId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedUpdateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedUpdateWithoutModelVersionsInput>;
export const BaseModelTypeUncheckedUpdateWithoutModelVersionsInputObjectZodSchema = makeSchema();
