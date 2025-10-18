import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileCreateWithoutModelVersionInputObjectSchema as ModelVersionFileCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileCreateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedCreateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionFileCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedCreateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateOrConnectWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateOrConnectWithoutModelVersionInput>;
export const ModelVersionFileCreateOrConnectWithoutModelVersionInputObjectZodSchema = makeSchema();
