import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateWithoutBaseModelInputObjectSchema as ModelVersionCreateWithoutBaseModelInputObjectSchema } from './ModelVersionCreateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema)])
}).strict();
export const ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutBaseModelInput>;
export const ModelVersionCreateOrConnectWithoutBaseModelInputObjectZodSchema = makeSchema();
