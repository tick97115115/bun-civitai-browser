import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutModelInputObjectSchema as ModelVersionCreateWithoutModelInputObjectSchema } from './ModelVersionCreateWithoutModelInput.schema';
import { ModelVersionUncheckedCreateWithoutModelInputObjectSchema as ModelVersionUncheckedCreateWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutModelInput.schema';
import { ModelVersionCreateOrConnectWithoutModelInputObjectSchema as ModelVersionCreateOrConnectWithoutModelInputObjectSchema } from './ModelVersionCreateOrConnectWithoutModelInput.schema';
import { ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectSchema as ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './ModelVersionUpsertWithWhereUniqueWithoutModelInput.schema';
import { ModelVersionCreateManyModelInputEnvelopeObjectSchema as ModelVersionCreateManyModelInputEnvelopeObjectSchema } from './ModelVersionCreateManyModelInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectSchema as ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './ModelVersionUpdateWithWhereUniqueWithoutModelInput.schema';
import { ModelVersionUpdateManyWithWhereWithoutModelInputObjectSchema as ModelVersionUpdateManyWithWhereWithoutModelInputObjectSchema } from './ModelVersionUpdateManyWithWhereWithoutModelInput.schema';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelVersionUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelVersionScalarWhereInputObjectSchema), z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionUncheckedUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedUpdateManyWithoutModelNestedInput>;
export const ModelVersionUncheckedUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
