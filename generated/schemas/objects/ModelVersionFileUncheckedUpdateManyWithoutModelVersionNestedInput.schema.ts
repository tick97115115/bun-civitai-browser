import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileCreateWithoutModelVersionInputObjectSchema as ModelVersionFileCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateWithoutModelVersionInput.schema';
import { ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema as ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateOrConnectWithoutModelVersionInput.schema';
import { ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema as ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema } from './ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInput.schema';
import { ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema as ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema } from './ModelVersionFileCreateManyModelVersionInputEnvelope.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema as ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema } from './ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInput.schema';
import { ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectSchema as ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectSchema } from './ModelVersionFileUpdateManyWithWhereWithoutModelVersionInput.schema';
import { ModelVersionFileScalarWhereInputObjectSchema as ModelVersionFileScalarWhereInputObjectSchema } from './ModelVersionFileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema).array(), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema), z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInput>;
export const ModelVersionFileUncheckedUpdateManyWithoutModelVersionNestedInputObjectZodSchema = makeSchema();
