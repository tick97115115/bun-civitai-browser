import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema as BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  baseModelTypes: z.lazy(() => BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema).optional()
}).strict();
export const BaseModelCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateWithoutModelVersionsInput>;
export const BaseModelCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
