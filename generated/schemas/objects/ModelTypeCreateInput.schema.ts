import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateNestedManyWithoutTypeInputObjectSchema as ModelCreateNestedManyWithoutTypeInputObjectSchema } from './ModelCreateNestedManyWithoutTypeInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  models: z.lazy(() => ModelCreateNestedManyWithoutTypeInputObjectSchema)
}).strict();
export const ModelTypeCreateInputObjectSchema: z.ZodType<Prisma.ModelTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCreateInput>;
export const ModelTypeCreateInputObjectZodSchema = makeSchema();
