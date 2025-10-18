import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutFilesInputObjectSchema as ModelVersionCreateWithoutFilesInputObjectSchema } from './ModelVersionCreateWithoutFilesInput.schema';
import { ModelVersionUncheckedCreateWithoutFilesInputObjectSchema as ModelVersionUncheckedCreateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutFilesInput.schema';
import { ModelVersionCreateOrConnectWithoutFilesInputObjectSchema as ModelVersionCreateOrConnectWithoutFilesInputObjectSchema } from './ModelVersionCreateOrConnectWithoutFilesInput.schema';
import { ModelVersionUpsertWithoutFilesInputObjectSchema as ModelVersionUpsertWithoutFilesInputObjectSchema } from './ModelVersionUpsertWithoutFilesInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionUpdateToOneWithWhereWithoutFilesInputObjectSchema as ModelVersionUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './ModelVersionUpdateToOneWithWhereWithoutFilesInput.schema';
import { ModelVersionUpdateWithoutFilesInputObjectSchema as ModelVersionUpdateWithoutFilesInputObjectSchema } from './ModelVersionUpdateWithoutFilesInput.schema';
import { ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema as ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelVersionCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelVersionUpsertWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelVersionUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUpdateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const ModelVersionUpdateOneRequiredWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.ModelVersionUpdateOneRequiredWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionUpdateOneRequiredWithoutFilesNestedInput>;
export const ModelVersionUpdateOneRequiredWithoutFilesNestedInputObjectZodSchema = makeSchema();
