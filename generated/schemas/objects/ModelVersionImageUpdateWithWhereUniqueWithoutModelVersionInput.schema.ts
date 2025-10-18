import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageUpdateWithoutModelVersionInputObjectSchema as ModelVersionImageUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUpdateWithoutModelVersionInput.schema';
import { ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedUpdateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionImageUpdateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedUpdateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInput>;
export const ModelVersionImageUpdateWithWhereUniqueWithoutModelVersionInputObjectZodSchema = makeSchema();
