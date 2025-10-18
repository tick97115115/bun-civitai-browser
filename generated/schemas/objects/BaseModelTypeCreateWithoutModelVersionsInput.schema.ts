import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema as BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateNestedOneWithoutBaseModelTypesInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  baseModel: z.lazy(() => BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema)
}).strict();
export const BaseModelTypeCreateWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateWithoutModelVersionsInput>;
export const BaseModelTypeCreateWithoutModelVersionsInputObjectZodSchema = makeSchema();
