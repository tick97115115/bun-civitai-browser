import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './ModelTypeWhereInput.schema';
import { ModelTypeUpdateWithoutModelsInputObjectSchema as ModelTypeUpdateWithoutModelsInputObjectSchema } from './ModelTypeUpdateWithoutModelsInput.schema';
import { ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema as ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelTypeUpdateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const ModelTypeUpdateToOneWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.ModelTypeUpdateToOneWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUpdateToOneWithWhereWithoutModelsInput>;
export const ModelTypeUpdateToOneWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
