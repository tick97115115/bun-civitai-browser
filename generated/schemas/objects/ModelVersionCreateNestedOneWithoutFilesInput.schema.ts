import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutFilesInputObjectSchema as ModelVersionCreateWithoutFilesInputObjectSchema } from './ModelVersionCreateWithoutFilesInput.schema';
import { ModelVersionUncheckedCreateWithoutFilesInputObjectSchema as ModelVersionUncheckedCreateWithoutFilesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutFilesInput.schema';
import { ModelVersionCreateOrConnectWithoutFilesInputObjectSchema as ModelVersionCreateOrConnectWithoutFilesInputObjectSchema } from './ModelVersionCreateOrConnectWithoutFilesInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutFilesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelVersionCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelVersionCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateNestedOneWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateNestedOneWithoutFilesInput>;
export const ModelVersionCreateNestedOneWithoutFilesInputObjectZodSchema = makeSchema();
