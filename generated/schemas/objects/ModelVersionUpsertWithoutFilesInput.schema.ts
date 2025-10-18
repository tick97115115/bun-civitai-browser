import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionUpdateWithoutFilesInputObjectSchema as ModelVersionUpdateWithoutFilesInputObjectSchema } from './ModelVersionUpdateWithoutFilesInput.schema';
import { ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema as ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutFilesInput.schema';
import { ModelVersionCreateWithoutFilesInputObjectSchema as ModelVersionCreateWithoutFilesInputObjectSchema } from './ModelVersionCreateWithoutFilesInput.schema';
import { ModelVersionUncheckedCreateWithoutFilesInputObjectSchema as ModelVersionUncheckedCreateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutFilesInput.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelVersionUpdateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => ModelVersionWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.ModelVersionUpsertWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpsertWithoutFilesInput>;
export const ModelVersionUpsertWithoutFilesInputObjectZodSchema = makeSchema();
