import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelUncheckedCreateNestedManyWithoutTagsInputObjectSchema as ModelUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './ModelUncheckedCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  models: z.lazy(() => ModelUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
}).strict();
export const TagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateInput>;
export const TagUncheckedCreateInputObjectZodSchema = makeSchema();
