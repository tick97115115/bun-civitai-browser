import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateManyMutationInput>;
export const TagUpdateManyMutationInputObjectZodSchema = makeSchema();
