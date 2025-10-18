import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutCreatorInputObjectSchema as ModelUpdateWithoutCreatorInputObjectSchema } from './ModelUpdateWithoutCreatorInput.schema';
import { ModelUncheckedUpdateWithoutCreatorInputObjectSchema as ModelUncheckedUpdateWithoutCreatorInputObjectSchema } from './ModelUncheckedUpdateWithoutCreatorInput.schema';
import { ModelCreateWithoutCreatorInputObjectSchema as ModelCreateWithoutCreatorInputObjectSchema } from './ModelCreateWithoutCreatorInput.schema';
import { ModelUncheckedCreateWithoutCreatorInputObjectSchema as ModelUncheckedCreateWithoutCreatorInputObjectSchema } from './ModelUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelUpdateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutCreatorInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const ModelUpsertWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithWhereUniqueWithoutCreatorInput>;
export const ModelUpsertWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
