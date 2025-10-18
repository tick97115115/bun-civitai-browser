import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutModelVersionsInputObjectSchema as ModelCreateWithoutModelVersionsInputObjectSchema } from './ModelCreateWithoutModelVersionsInput.schema';
import { ModelUncheckedCreateWithoutModelVersionsInputObjectSchema as ModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedCreateWithoutModelVersionsInput.schema';
import { ModelCreateOrConnectWithoutModelVersionsInputObjectSchema as ModelCreateOrConnectWithoutModelVersionsInputObjectSchema } from './ModelCreateOrConnectWithoutModelVersionsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutModelVersionsInput>;
export const ModelCreateNestedOneWithoutModelVersionsInputObjectZodSchema = makeSchema();
