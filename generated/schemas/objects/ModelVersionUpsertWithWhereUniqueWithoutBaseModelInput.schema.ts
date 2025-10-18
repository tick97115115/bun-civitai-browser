import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutBaseModelInputObjectSchema as ModelVersionUpdateWithoutBaseModelInputObjectSchema } from './ModelVersionUpdateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutBaseModelInput.schema';
import { ModelVersionCreateWithoutBaseModelInputObjectSchema as ModelVersionCreateWithoutBaseModelInputObjectSchema } from './ModelVersionCreateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelVersionUpdateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelInputObjectSchema)])
}).strict();
export const ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutBaseModelInput>;
export const ModelVersionUpsertWithWhereUniqueWithoutBaseModelInputObjectZodSchema = makeSchema();
