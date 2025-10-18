import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutTypeInputObjectSchema as ModelUpdateWithoutTypeInputObjectSchema } from './ModelUpdateWithoutTypeInput.schema';
import { ModelUncheckedUpdateWithoutTypeInputObjectSchema as ModelUncheckedUpdateWithoutTypeInputObjectSchema } from './ModelUncheckedUpdateWithoutTypeInput.schema';
import { ModelCreateWithoutTypeInputObjectSchema as ModelCreateWithoutTypeInputObjectSchema } from './ModelCreateWithoutTypeInput.schema';
import { ModelUncheckedCreateWithoutTypeInputObjectSchema as ModelUncheckedCreateWithoutTypeInputObjectSchema } from './ModelUncheckedCreateWithoutTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelUpdateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
export const ModelUpsertWithWhereUniqueWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutTypeInput>;
export const ModelUpsertWithWhereUniqueWithoutTypeInputObjectZodSchema = makeSchema();
