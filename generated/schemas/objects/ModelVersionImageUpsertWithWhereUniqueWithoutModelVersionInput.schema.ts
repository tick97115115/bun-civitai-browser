import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageUpdateWithoutModelVersionInputObjectSchema as ModelVersionImageUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUpdateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedUpdateWithoutModelVersionInput.schema';
import { ModelVersionImageCreateWithoutModelVersionInputObjectSchema as ModelVersionImageCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelVersionImageUpdateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInput>;
export const ModelVersionImageUpsertWithWhereUniqueWithoutModelVersionInputObjectZodSchema = makeSchema();
