import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutTypeInputObjectSchema as ModelCreateWithoutTypeInputObjectSchema } from './ModelCreateWithoutTypeInput.schema';
import { ModelUncheckedCreateWithoutTypeInputObjectSchema as ModelUncheckedCreateWithoutTypeInputObjectSchema } from './ModelUncheckedCreateWithoutTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutTypeInput>;
export const ModelCreateOrConnectWithoutTypeInputObjectZodSchema = makeSchema();
