import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  baseModelId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedUpdateInput>;
export const BaseModelTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
