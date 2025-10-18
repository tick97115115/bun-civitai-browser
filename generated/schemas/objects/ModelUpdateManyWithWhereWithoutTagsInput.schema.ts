import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelScalarWhereInputObjectSchema as ModelScalarWhereInputObjectSchema } from './ModelScalarWhereInput.schema';
import { ModelUpdateManyMutationInputObjectSchema as ModelUpdateManyMutationInputObjectSchema } from './ModelUpdateManyMutationInput.schema';
import { ModelUncheckedUpdateManyWithoutTagsInputObjectSchema as ModelUncheckedUpdateManyWithoutTagsInputObjectSchema } from './ModelUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateManyMutationInputObjectSchema), z.lazy(() => ModelUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const ModelUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateManyWithWhereWithoutTagsInput>;
export const ModelUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
