import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModelUpdateManyWithoutTagsNestedInputObjectSchema as ModelUpdateManyWithoutTagsNestedInputObjectSchema } from './ModelUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUpdateInputObjectSchema: z.ZodType<Prisma.TagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateInput>;
export const TagUpdateInputObjectZodSchema = makeSchema();
