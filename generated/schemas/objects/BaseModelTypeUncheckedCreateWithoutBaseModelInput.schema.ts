import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutBaseModelTypeInputObjectSchema).optional()
}).strict();
export const BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUncheckedCreateWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUncheckedCreateWithoutBaseModelInput>;
export const BaseModelTypeUncheckedCreateWithoutBaseModelInputObjectZodSchema = makeSchema();
