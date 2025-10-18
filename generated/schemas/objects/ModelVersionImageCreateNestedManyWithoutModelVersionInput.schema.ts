import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageCreateWithoutModelVersionInputObjectSchema as ModelVersionImageCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateWithoutModelVersionInput.schema';
import { ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema as ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateOrConnectWithoutModelVersionInput.schema';
import { ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema as ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema } from './ModelVersionImageCreateManyModelVersionInputEnvelope.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './ModelVersionImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema).array(), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateNestedManyWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateNestedManyWithoutModelVersionInput>;
export const ModelVersionImageCreateNestedManyWithoutModelVersionInputObjectZodSchema = makeSchema();
