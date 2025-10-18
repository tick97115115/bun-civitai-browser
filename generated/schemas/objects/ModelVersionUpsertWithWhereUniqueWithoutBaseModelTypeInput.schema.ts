import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema as ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUpdateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutBaseModelTypeInput.schema';
import { ModelVersionCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema)])
}).strict();
export const ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInput>;
export const ModelVersionUpsertWithWhereUniqueWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
