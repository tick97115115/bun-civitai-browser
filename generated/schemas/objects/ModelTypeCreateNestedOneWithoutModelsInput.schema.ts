import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeCreateWithoutModelsInputObjectSchema as ModelTypeCreateWithoutModelsInputObjectSchema } from './ModelTypeCreateWithoutModelsInput.schema';
import { ModelTypeUncheckedCreateWithoutModelsInputObjectSchema as ModelTypeUncheckedCreateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedCreateWithoutModelsInput.schema';
import { ModelTypeCreateOrConnectWithoutModelsInputObjectSchema as ModelTypeCreateOrConnectWithoutModelsInputObjectSchema } from './ModelTypeCreateOrConnectWithoutModelsInput.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './ModelTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelTypeCreateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelTypeCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelTypeCreateNestedOneWithoutModelsInputObjectSchema: z.ZodType<Prisma.ModelTypeCreateNestedOneWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCreateNestedOneWithoutModelsInput>;
export const ModelTypeCreateNestedOneWithoutModelsInputObjectZodSchema = makeSchema();
