import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutCreatorInputObjectSchema as ModelUpdateWithoutCreatorInputObjectSchema } from './ModelUpdateWithoutCreatorInput.schema';
import { ModelUncheckedUpdateWithoutCreatorInputObjectSchema as ModelUncheckedUpdateWithoutCreatorInputObjectSchema } from './ModelUncheckedUpdateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateWithoutCreatorInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutCreatorInputObjectSchema)])
}).strict();
export const ModelUpdateWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutCreatorInput>;
export const ModelUpdateWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
