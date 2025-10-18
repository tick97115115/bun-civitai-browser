import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateWithoutImagesInputObjectSchema as ModelVersionCreateWithoutImagesInputObjectSchema } from './ModelVersionCreateWithoutImagesInput.schema';
import { ModelVersionUncheckedCreateWithoutImagesInputObjectSchema as ModelVersionUncheckedCreateWithoutImagesInputObjectSchema } from './ModelVersionUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutImagesInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const ModelVersionCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutImagesInput>;
export const ModelVersionCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();
