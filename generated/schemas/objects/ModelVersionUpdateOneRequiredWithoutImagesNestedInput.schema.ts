import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutImagesInputObjectSchema as ModelVersionCreateWithoutImagesInputObjectSchema } from './ModelVersionCreateWithoutImagesInput.schema';
import { ModelVersionUncheckedCreateWithoutImagesInputObjectSchema as ModelVersionUncheckedCreateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutImagesInput.schema';
import { ModelVersionCreateOrConnectWithoutImagesInputObjectSchema as ModelVersionCreateOrConnectWithoutImagesInputObjectSchema } from './ModelVersionCreateOrConnectWithoutImagesInput.schema';
import { ModelVersionUpsertWithoutImagesInputObjectSchema as ModelVersionUpsertWithoutImagesInputObjectSchema } from './ModelVersionUpsertWithoutImagesInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateToOneWithWhereWithoutImagesInputObjectSchema as ModelVersionUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './ModelVersionUpdateToOneWithWhereWithoutImagesInput.schema';
import { ModelVersionUpdateWithoutImagesInputObjectSchema as ModelVersionUpdateWithoutImagesInputObjectSchema } from './ModelVersionUpdateWithoutImagesInput.schema';
import { ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema as ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelVersionCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelVersionUpsertWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelVersionUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUpdateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const ModelVersionUpdateOneRequiredWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateOneRequiredWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateOneRequiredWithoutImagesNestedInput>;
export const ModelVersionUpdateOneRequiredWithoutImagesNestedInputObjectZodSchema = makeSchema();
