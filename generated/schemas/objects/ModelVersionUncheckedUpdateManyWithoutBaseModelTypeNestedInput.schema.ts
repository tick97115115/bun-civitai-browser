import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateOrConnectWithoutBaseModelTypeInput.schema';
import { ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectSchema as ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInput.schema';
import { ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema as ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema } from './ModelVersionCreateManyBaseModelTypeInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectSchema as ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInput.schema';
import { ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectSchema as ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInput.schema';
import { ModelVersionScalarWhereInputObjectSchema as ModelVersionScalarWhereInputObjectSchema } from './ModelVersionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUpdateManyWithWhereWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelVersionScalarWhereInputObjectSchema), z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInput>;
export const ModelVersionUncheckedUpdateManyWithoutBaseModelTypeNestedInputObjectZodSchema = makeSchema();
