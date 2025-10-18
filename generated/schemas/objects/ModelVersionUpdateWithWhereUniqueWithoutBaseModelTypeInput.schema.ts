import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema as ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUpdateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionUpdateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutBaseModelTypeInputObjectSchema)])
}).strict();
export const ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInput>;
export const ModelVersionUpdateWithWhereUniqueWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
