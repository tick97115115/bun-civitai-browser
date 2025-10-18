import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema';
import { ModelUpdateManyMutationInputObjectSchema as ModelUpdateManyMutationInputObjectSchema } from './ModelUpdateManyMutationInput.schema';
import { ModelUncheckedUpdateManyWithoutTypeInputObjectSchema as ModelUncheckedUpdateManyWithoutTypeInputObjectSchema } from './ModelUncheckedUpdateManyWithoutTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateManyMutationInputObjectSchema), z.lazy(() => ModelUncheckedUpdateManyWithoutTypeInputObjectSchema)])
}).strict();
export const ModelUpdateManyWithWhereWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutTypeInput>;
export const ModelUpdateManyWithWhereWithoutTypeInputObjectZodSchema = makeSchema();
