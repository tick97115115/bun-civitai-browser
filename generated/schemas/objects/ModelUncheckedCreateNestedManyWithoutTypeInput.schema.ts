import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutTypeInputObjectSchema as ModelCreateWithoutTypeInputObjectSchema } from './ModelCreateWithoutTypeInput.schema';
import { ModelUncheckedCreateWithoutTypeInputObjectSchema as ModelUncheckedCreateWithoutTypeInputObjectSchema } from './ModelUncheckedCreateWithoutTypeInput.schema';
import { ModelCreateOrConnectWithoutTypeInputObjectSchema as ModelCreateOrConnectWithoutTypeInputObjectSchema } from './ModelCreateOrConnectWithoutTypeInput.schema';
import { ModelCreateManyTypeInputEnvelopeObjectSchema as ModelCreateManyTypeInputEnvelopeObjectSchema } from './ModelCreateManyTypeInputEnvelope.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelCreateManyTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelUncheckedCreateNestedManyWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutTypeInput>;
export const ModelUncheckedCreateNestedManyWithoutTypeInputObjectZodSchema = makeSchema();
