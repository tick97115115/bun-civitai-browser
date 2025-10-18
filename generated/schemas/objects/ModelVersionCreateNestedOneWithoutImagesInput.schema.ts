import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateWithoutImagesInputObjectSchema as ModelVersionCreateWithoutImagesInputObjectSchema } from './ModelVersionCreateWithoutImagesInput.schema';
import { ModelVersionUncheckedCreateWithoutImagesInputObjectSchema as ModelVersionUncheckedCreateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutImagesInput.schema';
import { ModelVersionCreateOrConnectWithoutImagesInputObjectSchema as ModelVersionCreateOrConnectWithoutImagesInputObjectSchema } from './ModelVersionCreateOrConnectWithoutImagesInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelVersionCreateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelVersionCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelVersionCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateNestedOneWithoutImagesInput>;
export const ModelVersionCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();
