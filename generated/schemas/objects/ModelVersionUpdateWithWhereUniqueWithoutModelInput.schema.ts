import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutModelInputObjectSchema as ModelVersionUpdateWithoutModelInputObjectSchema } from './ModelVersionUpdateWithoutModelInput.schema';
import { ModelVersionUncheckedUpdateWithoutModelInputObjectSchema as ModelVersionUncheckedUpdateWithoutModelInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutModelInput>;
export const ModelVersionUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
