import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeCreateWithoutModelsInputObjectSchema as ModelTypeCreateWithoutModelsInputObjectSchema } from './ModelTypeCreateWithoutModelsInput.schema';
import { ModelTypeUncheckedCreateWithoutModelsInputObjectSchema as ModelTypeUncheckedCreateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedCreateWithoutModelsInput.schema';
import { ModelTypeCreateOrConnectWithoutModelsInputObjectSchema as ModelTypeCreateOrConnectWithoutModelsInputObjectSchema } from './ModelTypeCreateOrConnectWithoutModelsInput.schema';
import { ModelTypeUpsertWithoutModelsInputObjectSchema as ModelTypeUpsertWithoutModelsInputObjectSchema } from './ModelTypeUpsertWithoutModelsInput.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './ModelTypeWhereUniqueInput.schema';
import { ModelTypeUpdateToOneWithWhereWithoutModelsInputObjectSchema as ModelTypeUpdateToOneWithWhereWithoutModelsInputObjectSchema } from './ModelTypeUpdateToOneWithWhereWithoutModelsInput.schema';
import { ModelTypeUpdateWithoutModelsInputObjectSchema as ModelTypeUpdateWithoutModelsInputObjectSchema } from './ModelTypeUpdateWithoutModelsInput.schema';
import { ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema as ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelTypeCreateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelTypeCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelTypeUpsertWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelTypeUpdateToOneWithWhereWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUpdateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedUpdateWithoutModelsInputObjectSchema)]).optional()
}).strict();
export const ModelTypeUpdateOneRequiredWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.ModelTypeUpdateOneRequiredWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeUpdateOneRequiredWithoutModelsNestedInput>;
export const ModelTypeUpdateOneRequiredWithoutModelsNestedInputObjectZodSchema = makeSchema();
