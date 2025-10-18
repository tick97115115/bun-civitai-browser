import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  baseModelId: z.number().int(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema)
}).strict();
export const BaseModelTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedCreateInput>;
export const BaseModelTypeUncheckedCreateInputObjectZodSchema = makeSchema();
