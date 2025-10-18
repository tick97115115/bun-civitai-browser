import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  baseModelTypes: z.lazy(() => BaseModelTypeUncheckedCreateNestedManyWithoutBaseModelInputObjectSchema).optional()
}).strict();
export const BaseModelUncheckedCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelUncheckedCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelUncheckedCreateWithoutModelVersionsInput>;
export const BaseModelUncheckedCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
