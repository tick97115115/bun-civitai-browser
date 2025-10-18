import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BaseModelUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.BaseModelUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUpdateManyMutationInput>;
export const BaseModelUpdateManyMutationInputObjectZodSchema = makeSchema();
