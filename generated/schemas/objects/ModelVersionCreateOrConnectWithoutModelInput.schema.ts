import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateWithoutModelInputObjectSchema as ModelVersionCreateWithoutModelInputObjectSchema } from './ModelVersionCreateWithoutModelInput.schema';
import { ModelVersionUncheckedCreateWithoutModelInputObjectSchema as ModelVersionUncheckedCreateWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelVersionCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutModelInput>;
export const ModelVersionCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
