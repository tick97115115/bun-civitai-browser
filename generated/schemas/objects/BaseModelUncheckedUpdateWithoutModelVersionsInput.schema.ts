import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BaseModelTypeUncheckedUpdateManyWithoutBaseModelNestedInputObjectSchema as BaseModelTypeUncheckedUpdateManyWithoutBaseModelNestedInputObjectSchema } from './BaseModelTypeUncheckedUpdateManyWithoutBaseModelNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModelTypes: z.lazy(() => BaseModelTypeUncheckedUpdateManyWithoutBaseModelNestedInputObjectSchema).optional()
}).strict();
export const BaseModelUncheckedUpdateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelUncheckedUpdateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUncheckedUpdateWithoutModelVersionsInput>;
export const BaseModelUncheckedUpdateWithoutModelVersionsInputObjectZodSchema = makeSchema();
