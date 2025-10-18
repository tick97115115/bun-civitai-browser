import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageCreateWithoutModelVersionInputObjectSchema as ModelVersionImageCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateWithoutModelVersionInput.schema';
import { ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema as ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateOrConnectWithoutModelVersionInput.schema';
import { ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema as ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema } from './ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInput.schema';
import { ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema as ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema } from './ModelVersionImageCreateManyModelVersionInputEnvelope.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema as ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema } from './ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInput.schema';
import { ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectSchema as ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectSchema } from './ModelVersionImageUpdateManyWithWhereWithoutModelVersionInput.schema';
import { ModelVersionImageScalarWhereInputObjectSchema as ModelVersionImageScalarWhereInputObjectSchema } from './ModelVersionImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema).array(), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema), z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInput>;
export const ModelVersionImageUncheckedUpdateManyWithoutModelVersionNestedInputObjectZodSchema = makeSchema();
