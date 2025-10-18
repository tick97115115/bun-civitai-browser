import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageCreateWithoutModelVersionInputObjectSchema as ModelVersionImageCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageCreateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedCreateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelVersionImageCreateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedCreateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateOrConnectWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateOrConnectWithoutModelVersionInput>;
export const ModelVersionImageCreateOrConnectWithoutModelVersionInputObjectZodSchema = makeSchema();
