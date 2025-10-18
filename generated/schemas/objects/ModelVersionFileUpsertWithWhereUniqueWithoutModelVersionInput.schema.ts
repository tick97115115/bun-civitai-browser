import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileUpdateWithoutModelVersionInputObjectSchema as ModelVersionFileUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUpdateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedUpdateWithoutModelVersionInput.schema';
import { ModelVersionFileCreateWithoutModelVersionInputObjectSchema as ModelVersionFileCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelVersionFileUpdateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInput>;
export const ModelVersionFileUpsertWithWhereUniqueWithoutModelVersionInputObjectZodSchema = makeSchema();
