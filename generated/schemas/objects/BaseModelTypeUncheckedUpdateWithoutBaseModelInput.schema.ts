import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedUpdateWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedUpdateWithoutBaseModelInput>;
export const BaseModelTypeUncheckedUpdateWithoutBaseModelInputObjectZodSchema = makeSchema();
