import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileCreateWithoutModelVersionInputObjectSchema as ModelVersionFileCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateWithoutModelVersionInput.schema';
import { ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema as ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateOrConnectWithoutModelVersionInput.schema';
import { ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema as ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema } from './ModelVersionFileCreateManyModelVersionInputEnvelope.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './ModelVersionFileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema).array(), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInput>;
export const ModelVersionFileUncheckedCreateNestedManyWithoutModelVersionInputObjectZodSchema = makeSchema();
