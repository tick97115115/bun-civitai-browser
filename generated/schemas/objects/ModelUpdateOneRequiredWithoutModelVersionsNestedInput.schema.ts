import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateWithoutModelVersionsInputObjectSchema as ModelCreateWithoutModelVersionsInputObjectSchema } from './ModelCreateWithoutModelVersionsInput.schema';
import { ModelUncheckedCreateWithoutModelVersionsInputObjectSchema as ModelUncheckedCreateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedCreateWithoutModelVersionsInput.schema';
import { ModelCreateOrConnectWithoutModelVersionsInputObjectSchema as ModelCreateOrConnectWithoutModelVersionsInputObjectSchema } from './ModelCreateOrConnectWithoutModelVersionsInput.schema';
import { ModelUpsertWithoutModelVersionsInputObjectSchema as ModelUpsertWithoutModelVersionsInputObjectSchema } from './ModelUpsertWithoutModelVersionsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema as ModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutModelVersionsInput.schema';
import { ModelUpdateWithoutModelVersionsInputObjectSchema as ModelUpdateWithoutModelVersionsInputObjectSchema } from './ModelUpdateWithoutModelVersionsInput.schema';
import { ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema as ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelVersionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutModelVersionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutModelVersionsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUpdateWithoutModelVersionsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelVersionsInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneRequiredWithoutModelVersionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneRequiredWithoutModelVersionsNestedInput>;
export const ModelUpdateOneRequiredWithoutModelVersionsNestedInputObjectZodSchema = makeSchema();
