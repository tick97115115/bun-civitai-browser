import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutBaseModelInputObjectSchema as ModelVersionUpdateWithoutBaseModelInputObjectSchema } from './ModelVersionUpdateWithoutBaseModelInput.schema';
import { ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema as ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateWithoutBaseModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutBaseModelInputObjectSchema)])
}).strict();
export const ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutBaseModelInput>;
export const ModelVersionUpdateWithWhereUniqueWithoutBaseModelInputObjectZodSchema = makeSchema();
