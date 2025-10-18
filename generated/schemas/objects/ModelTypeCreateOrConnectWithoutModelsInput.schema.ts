import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './ModelTypeWhereUniqueInput.schema';
import { ModelTypeCreateWithoutModelsInputObjectSchema as ModelTypeCreateWithoutModelsInputObjectSchema } from './ModelTypeCreateWithoutModelsInput.schema';
import { ModelTypeUncheckedCreateWithoutModelsInputObjectSchema as ModelTypeUncheckedCreateWithoutModelsInputObjectSchema } from './ModelTypeUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelTypeCreateWithoutModelsInputObjectSchema), z.lazy(() => ModelTypeUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const ModelTypeCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.ModelTypeCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeCreateOrConnectWithoutModelsInput>;
export const ModelTypeCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
