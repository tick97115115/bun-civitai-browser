import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutCreatorInputObjectSchema as ModelCreateWithoutCreatorInputObjectSchema } from './ModelCreateWithoutCreatorInput.schema';
import { ModelUncheckedCreateWithoutCreatorInputObjectSchema as ModelUncheckedCreateWithoutCreatorInputObjectSchema } from './ModelUncheckedCreateWithoutCreatorInput.schema';
import { ModelCreateOrConnectWithoutCreatorInputObjectSchema as ModelCreateOrConnectWithoutCreatorInputObjectSchema } from './ModelCreateOrConnectWithoutCreatorInput.schema';
import { ModelCreateManyCreatorInputEnvelopeObjectSchema as ModelCreateManyCreatorInputEnvelopeObjectSchema } from './ModelCreateManyCreatorInputEnvelope.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => ModelCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelWhereUniqueInputObjectSchema), z.lazy(() => ModelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelUncheckedCreateNestedManyWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateNestedManyWithoutCreatorInput>;
export const ModelUncheckedCreateNestedManyWithoutCreatorInputObjectZodSchema = makeSchema();
