import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelUpdateWithoutModelVersionsInputObjectSchema as ModelUpdateWithoutModelVersionsInputObjectSchema } from './ModelUpdateWithoutModelVersionsInput.schema';
import { ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelVersionsInput.schema';
import { ModelCreateWithoutModelVersionsInputObjectSchema as ModelCreateWithoutModelVersionsInputObjectSchema } from './ModelCreateWithoutModelVersionsInput.schema';
import { ModelUncheckedCreateWithoutModelVersionsInputObjectSchema as ModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedCreateWithoutModelVersionsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutModelVersionsInput>;
export const ModelUpsertWithoutModelVersionsInputObjectZodSchema = makeSchema();
