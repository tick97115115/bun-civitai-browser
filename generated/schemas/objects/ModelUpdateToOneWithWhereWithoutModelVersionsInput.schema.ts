import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutModelVersionsInputObjectSchema as ModelUpdateWithoutModelVersionsInputObjectSchema } from './ModelUpdateWithoutModelVersionsInput.schema';
import { ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutModelVersionsInput>;
export const ModelUpdateToOneWithWhereWithoutModelVersionsInputObjectZodSchema = makeSchema();
