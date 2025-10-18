import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema as ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema } from './ModelVersionUpdateManyWithoutBaseModelNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelVersions: z.lazy(() => ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema).optional()
}).strict();
export const BaseModelUpdateWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateWithoutBaseModelTypesInput>;
export const BaseModelUpdateWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
