import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const CreatorUpdateWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorUpdateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUpdateWithoutModelsInput>;
export const CreatorUpdateWithoutModelsInputObjectZodSchema = makeSchema();
