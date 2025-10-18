import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageScalarWhereInputObjectSchema as ModelVersionImageScalarWhereInputObjectSchema } from './ModelVersionImageScalarWhereInput.schema';
import { ModelVersionImageUpdateManyMutationInputObjectSchema as ModelVersionImageUpdateManyMutationInputObjectSchema } from './ModelVersionImageUpdateManyMutationInput.schema';
import { ModelVersionImageUncheckedUpdateManyWithoutModelVersionInputObjectSchema as ModelVersionImageUncheckedUpdateManyWithoutModelVersionInputObjectSchema } from './ModelVersionImageUncheckedUpdateManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionImageUpdateManyMutationInputObjectSchema), z.lazy(() => ModelVersionImageUncheckedUpdateManyWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionImageUpdateManyWithWhereWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageUpdateManyWithWhereWithoutModelVersionInput>;
export const ModelVersionImageUpdateManyWithWhereWithoutModelVersionInputObjectZodSchema = makeSchema();
