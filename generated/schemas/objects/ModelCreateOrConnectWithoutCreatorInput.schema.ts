import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutCreatorInputObjectSchema as ModelCreateWithoutCreatorInputObjectSchema } from './ModelCreateWithoutCreatorInput.schema';
import { ModelUncheckedCreateWithoutCreatorInputObjectSchema as ModelUncheckedCreateWithoutCreatorInputObjectSchema } from './ModelUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutCreatorInput>;
export const ModelCreateOrConnectWithoutCreatorInputObjectZodSchema = makeSchema();
