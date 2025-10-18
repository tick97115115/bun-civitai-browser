import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutBaseModelInput.schema';
import { BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema),
  baseModelTypes: z.lazy(() => BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema)
}).strict();
export const BaseModelUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BaseModelUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUncheckedCreateInput>;
export const BaseModelUncheckedCreateInputObjectZodSchema = makeSchema();
