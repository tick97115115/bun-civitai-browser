import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema';
import { ModelVersionUpdateManyMutationInputObjectSchema as ModelVersionUpdateManyMutationInputObjectSchema } from './ModelVersionUpdateManyMutationInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutModelInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutModelInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateManyMutationInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const ModelVersionUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutModelInput>;
export const ModelVersionUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
