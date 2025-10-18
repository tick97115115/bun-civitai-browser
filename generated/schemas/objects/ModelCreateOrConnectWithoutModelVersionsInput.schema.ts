import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutModelVersionsInputObjectSchema as ModelCreateWithoutModelVersionsInputObjectSchema } from './ModelCreateWithoutModelVersionsInput.schema';
import { ModelUncheckedCreateWithoutModelVersionsInputObjectSchema as ModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedCreateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutModelVersionsInput>;
export const ModelCreateOrConnectWithoutModelVersionsInputObjectZodSchema = makeSchema();
