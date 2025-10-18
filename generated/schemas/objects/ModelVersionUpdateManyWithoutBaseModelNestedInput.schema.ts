import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutBaseModelInputObjectSchema as ModelVersionCreateWithoutBaseModelInputObjectSchema } from './ModelVersionCreateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelInput.schema';
import { ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema as ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema } from './ModelVersionCreateOrConnectWithoutBaseModelInput.schema';
import { ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema as ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema } from './ModelVersionUpsertWithWhereUniqueWithoutBaseModelInput.schema';
import { ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema as ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema } from './ModelVersionCreateManyBaseModelInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema as ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema } from './ModelVersionUpdateWithWhereUniqueWithoutBaseModelInput.schema';
import { ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectSchema as ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectSchema } from './ModelVersionUpdateManyWithWhereWithoutBaseModelInput.schema';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUpdateManyWithWhereWithoutBaseModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelVersionScalarWhereInputObjectSchema), z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionUpdateManyWithoutBaseModelNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateManyWithoutBaseModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateManyWithoutBaseModelNestedInput>;
export const ModelVersionUpdateManyWithoutBaseModelNestedInputObjectZodSchema = makeSchema();
