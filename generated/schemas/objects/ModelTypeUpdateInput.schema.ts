import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelUpdateManyWithoutTypeNestedInputObjectSchema as ModelUpdateManyWithoutTypeNestedInputObjectSchema } from './ModelUpdateManyWithoutTypeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
export const ModelTypeUpdateInputObjectSchema: z.ZodType<Prisma.ModelTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUpdateInput>;
export const ModelTypeUpdateInputObjectZodSchema = makeSchema();
