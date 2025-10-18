import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateOrConnectWithoutBaseModelTypeInput.schema';
import { ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema as ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema } from './ModelVersionCreateManyBaseModelTypeInputEnvelope.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema).array(), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelVersionWhereUniqueInputObjectSchema), z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateNestedManyWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateNestedManyWithoutBaseModelTypeInput>;
export const ModelVersionCreateNestedManyWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
