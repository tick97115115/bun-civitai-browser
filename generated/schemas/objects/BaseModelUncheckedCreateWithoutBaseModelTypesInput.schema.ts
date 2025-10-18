import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema).optional()
}).strict();
export const BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelUncheckedCreateWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUncheckedCreateWithoutBaseModelTypesInput>;
export const BaseModelUncheckedCreateWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
