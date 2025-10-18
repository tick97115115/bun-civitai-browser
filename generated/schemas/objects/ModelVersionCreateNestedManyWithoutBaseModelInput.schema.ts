import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutBaseModelInputObjectSchema as ModelVersionCreateWithoutBaseModelInputObjectSchema } from './ModelVersionCreateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelInput.schema';
import { ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema as ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema } from './ModelVersionCreateOrConnectWithoutBaseModelInput.schema';
import { ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema as ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema } from './ModelVersionCreateManyBaseModelInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionCreateNestedManyWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateNestedManyWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateNestedManyWithoutBaseModelInput>;
export const ModelVersionCreateNestedManyWithoutBaseModelInputObjectZodSchema = makeSchema();
