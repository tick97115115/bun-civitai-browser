import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema';
import { ModelVersionUpdateManyMutationInputObjectSchema as ModelVersionUpdateManyMutationInputObjectSchema } from './ModelVersionUpdateManyMutationInput.schema';
import { ModelVersionUncheckedUpdateManyWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedUpdateManyWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedUpdateManyWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateManyMutationInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateManyWithoutBaseModelTypeInputObjectSchema)])
}).strict();
export const ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInput>;
export const ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
