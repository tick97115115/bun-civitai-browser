import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileScalarWhereInputObjectSchema as ModelVersionFileScalarWhereInputObjectSchema } from './ModelVersionFileScalarWhereInput.schema';
import { ModelVersionFileUpdateManyMutationInputObjectSchema as ModelVersionFileUpdateManyMutationInputObjectSchema } from './ModelVersionFileUpdateManyMutationInput.schema';
import { ModelVersionFileUncheckedUpdateManyWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedUpdateManyWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedUpdateManyWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionFileUpdateManyMutationInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedUpdateManyWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUpdateManyWithWhereWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUpdateManyWithWhereWithoutModelVersionInput>;
export const ModelVersionFileUpdateManyWithWhereWithoutModelVersionInputObjectZodSchema = makeSchema();
