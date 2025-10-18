import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateNestedManyWithoutBaseModelTypeInput.schema';
import { BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema as BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema } from './BaseModelCreateNestedOneWithoutBaseModelTypesInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema),
  baseModel: z.lazy(() => BaseModelCreateNestedOneWithoutBaseModelTypesInputObjectSchema)
}).strict();
export const BaseModelTypeCreateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateInput>;
export const BaseModelTypeCreateInputObjectZodSchema = makeSchema();
