import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileUpdateWithoutModelVersionInputObjectSchema as ModelVersionFileUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUpdateWithoutModelVersionInput.schema';
import { ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema as ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema } from './ModelVersionFileUncheckedUpdateWithoutModelVersionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelVersionFileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelVersionFileUpdateWithoutModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileUncheckedUpdateWithoutModelVersionInputObjectSchema)])
}).strict();
export const ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectSchema: z.ZodType<Prisma.ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInput>;
export const ModelVersionFileUpdateWithWhereUniqueWithoutModelVersionInputObjectZodSchema = makeSchema();
