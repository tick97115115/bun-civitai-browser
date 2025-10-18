import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema as ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema).optional()
}).strict();
export const BaseModelCreateWithoutBaseModelTypesInputObjectSchema: z.ZodType<Prisma.BaseModelCreateWithoutBaseModelTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateWithoutBaseModelTypesInput>;
export const BaseModelCreateWithoutBaseModelTypesInputObjectZodSchema = makeSchema();
