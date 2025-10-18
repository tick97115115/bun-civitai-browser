import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeUpdateWithoutModelsInputObjectSchema as ModelTypeUpdateWithoutModelsInputObjectSchema } from './ModelTypeUpdateWithoutModelsInput.schema';
import { ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema as ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedUpdateWithoutModelsInput.schema';
import { ModelTypeCreateWithoutModelsInputObjectSchema as ModelTypeCreateWithoutModelsInputObjectSchema } from './ModelTypeCreateWithoutModelsInput.schema';
import { ModelTypeUncheckedCreateWithoutModelsInputObjectSchema as ModelTypeUncheckedCreateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedCreateWithoutModelsInput.schema';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './ModelTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelTypeUpdateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelTypeCreateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedCreateWithoutModelsInputObjectSchema)]),
  where: z.lazy(() => ModelTypeWhereInputObjectSchema).optional()
}).strict();
export const ModelTypeUpsertWithoutModelsInputObjectSchema: z.ZodType<Prisma.ModelTypeUpsertWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUpsertWithoutModelsInput>;
export const ModelTypeUpsertWithoutModelsInputObjectZodSchema = makeSchema();
