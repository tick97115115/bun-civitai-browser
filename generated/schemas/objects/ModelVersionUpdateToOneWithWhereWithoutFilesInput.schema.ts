import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema';
import { ModelVersionUpdateWithoutFilesInputObjectSchema as ModelVersionUpdateWithoutFilesInputObjectSchema } from './ModelVersionUpdateWithoutFilesInput.schema';
import { ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema as ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelVersionUpdateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const ModelVersionUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateToOneWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateToOneWithWhereWithoutFilesInput>;
export const ModelVersionUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
