import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelUncheckedCreateNestedManyWithoutTypeInputObjectSchema as ModelUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './ModelUncheckedCreateNestedManyWithoutTypeInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  models: z.lazy(() => ModelUncheckedCreateNestedManyWithoutTypeInputObjectSchema)
}).strict();
export const ModelTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUncheckedCreateInput>;
export const ModelTypeUncheckedCreateInputObjectZodSchema = makeSchema();
