import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema';
import { ModelVersionUpdateWithoutImagesInputObjectSchema as ModelVersionUpdateWithoutImagesInputObjectSchema } from './ModelVersionUpdateWithoutImagesInput.schema';
import { ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema as ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelVersionUpdateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const ModelVersionUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateToOneWithWhereWithoutImagesInput>;
export const ModelVersionUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();
