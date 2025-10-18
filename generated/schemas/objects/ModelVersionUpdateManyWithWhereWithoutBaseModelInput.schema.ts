import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema';
import { ModelVersionUpdateManyMutationInputObjectSchema as ModelVersionUpdateManyMutationInputObjectSchema } from './ModelVersionUpdateManyMutationInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutBaseModelInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateManyMutationInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateManyWithoutBaseModelInputObjectSchema)])
}).strict();
export const ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutBaseModelInput>;
export const ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectZodSchema = makeSchema();
