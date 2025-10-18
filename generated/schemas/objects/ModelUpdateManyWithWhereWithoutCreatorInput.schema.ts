import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema';
import { ModelUpdateManyMutationInputObjectSchema as ModelUpdateManyMutationInputObjectSchema } from './ModelUpdateManyMutationInput.schema';
import { ModelUncheckedUpdateManyWithoutCreatorInputObjectSchema as ModelUncheckedUpdateManyWithoutCreatorInputObjectSchema } from './ModelUncheckedUpdateManyWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateManyMutationInputObjectSchema), z.lazy(() => ModelUncheckedUpdateManyWithoutCreatorInputObjectSchema)])
}).strict();
export const ModelUpdateManyWithWhereWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutCreatorInput>;
export const ModelUpdateManyWithWhereWithoutCreatorInputObjectZodSchema = makeSchema();
