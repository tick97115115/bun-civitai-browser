import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUpdateWithoutImagesInputObjectSchema as ModelVersionUpdateWithoutImagesInputObjectSchema } from './ModelVersionUpdateWithoutImagesInput.schema';
import { ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema as ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutImagesInput.schema';
import { ModelVersionCreateWithoutImagesInputObjectSchema as ModelVersionCreateWithoutImagesInputObjectSchema } from './ModelVersionCreateWithoutImagesInput.schema';
import { ModelVersionUncheckedCreateWithoutImagesInputObjectSchema as ModelVersionUncheckedCreateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutImagesInput.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelVersionUpdateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutImagesInputObjectSchema)]),
  where: z.lazy(() => ModelVersionWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionUpsertWithoutImagesInputObjectSchema: z.ZodType<Prisma.ModelVersionUpsertWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpsertWithoutImagesInput>;
export const ModelVersionUpsertWithoutImagesInputObjectZodSchema = makeSchema();
