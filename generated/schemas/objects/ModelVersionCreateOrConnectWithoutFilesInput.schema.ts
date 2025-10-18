import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateWithoutFilesInputObjectSchema as ModelVersionCreateWithoutFilesInputObjectSchema } from './ModelVersionCreateWithoutFilesInput.schema';
import { ModelVersionUncheckedCreateWithoutFilesInputObjectSchema as ModelVersionUncheckedCreateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const ModelVersionCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutFilesInput>;
export const ModelVersionCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
