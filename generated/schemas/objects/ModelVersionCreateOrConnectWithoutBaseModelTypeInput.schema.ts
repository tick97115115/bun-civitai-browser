import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionCreateWithoutBaseModelTypeInput.schema';
import { ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema as ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema } from './ModelVersionUncheckedCreateWithoutBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionCreateWithoutBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionUncheckedCreateWithoutBaseModelTypeInputObjectSchema)])
}).strict();
export const ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateOrConnectWithoutBaseModelTypeInput>;
export const ModelVersionCreateOrConnectWithoutBaseModelTypeInputObjectZodSchema = makeSchema();
