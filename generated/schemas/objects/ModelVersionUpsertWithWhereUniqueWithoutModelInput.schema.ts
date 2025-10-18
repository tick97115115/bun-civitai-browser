import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutModelInputObjectSchema as ModelVersionUpdateWithoutModelInputObjectSchema } from './ModelVersionUpdateWithoutModelInput.schema';
import { ModelVersionUncheckedUpdateWithoutModelInputObjectSchema as ModelVersionUncheckedUpdateWithoutModelInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutModelInput.schema';
import { ModelVersionCreateWithoutModelInputObjectSchema as ModelVersionCreateWithoutModelInputObjectSchema } from './ModelVersionCreateWithoutModelInput.schema';
import { ModelVersionUncheckedCreateWithoutModelInputObjectSchema as ModelVersionUncheckedCreateWithoutModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelVersionUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutModelInput>;
export const ModelVersionUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
