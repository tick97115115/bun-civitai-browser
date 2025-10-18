import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateNestedManyWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  modelVersions: z.lazy(() => ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema).optional()
}).strict();
export const BaseModelTypeCreateWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateWithoutBaseModelInput>;
export const BaseModelTypeCreateWithoutBaseModelInputObjectZodSchema = makeSchema();
