import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateNestedManyWithoutTagsInputObjectSchema as ModelCreateNestedManyWithoutTagsInputObjectSchema } from './ModelCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  models: z.lazy(() => ModelCreateNestedManyWithoutTagsInputObjectSchema)
}).strict();
export const TagCreateInputObjectSchema: z.ZodType<Prisma.TagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateInput>;
export const TagCreateInputObjectZodSchema = makeSchema();
