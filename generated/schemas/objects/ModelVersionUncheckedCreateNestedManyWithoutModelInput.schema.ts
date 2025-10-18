import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutModelInputObjectSchema as ModelVersionCreateWithoutModelInputObjectSchema } from './ModelVersionCreateWithoutModelInput.schema';
import { ModelVersionUncheckedCreateWithoutModelInputObjectSchema as ModelVersionUncheckedCreateWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutModelInput.schema';
import { ModelVersionCreateOrConnectWithoutModelInputObjectSchema as ModelVersionCreateOrConnectWithoutModelInputObjectSchema } from './ModelVersionCreateOrConnectWithoutModelInput.schema';
import { ModelVersionCreateManyModelInputEnvelopeObjectSchema as ModelVersionCreateManyModelInputEnvelopeObjectSchema } from './ModelVersionCreateManyModelInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedCreateNestedManyWithoutModelInput>;
export const ModelVersionUncheckedCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
