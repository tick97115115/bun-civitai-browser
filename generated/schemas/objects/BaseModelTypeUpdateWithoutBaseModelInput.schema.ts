import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema as ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema } from './ModelVersionUpdateManyWithoutBaseModelTypeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUpdateManyWithoutBaseModelTypeNestedInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUpdateWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateWithoutBaseModelInput>;
export const BaseModelTypeUpdateWithoutBaseModelInputObjectZodSchema = makeSchema();
