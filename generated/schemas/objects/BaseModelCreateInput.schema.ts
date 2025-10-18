import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema as ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema } from './ModelVersionCreateNestedManyWithoutBaseModelInput.schema';
import { BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema as BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema } from './BaseModelTypeCreateNestedManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema),
  baseModelTypes: z.lazy(() => BaseModelTypeCreateNestedManyWithoutBaseModelInputObjectSchema)
}).strict();
export const BaseModelCreateInputObjectSchema: z.ZodType<Prisma.BaseModelCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelCreateInput>;
export const BaseModelCreateInputObjectZodSchema = makeSchema();
