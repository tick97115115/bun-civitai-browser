import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateWithoutTypeInputObjectSchema as ModelUpdateWithoutTypeInputObjectSchema } from './ModelUpdateWithoutTypeInput.schema';
import { ModelUncheckedUpdateWithoutTypeInputObjectSchema as ModelUncheckedUpdateWithoutTypeInputObjectSchema } from './ModelUncheckedUpdateWithoutTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelUpdateWithoutTypeInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTypeInputObjectSchema)])
}).strict();
export const ModelUpdateWithWhereUniqueWithoutTypeInputObjectSchema: z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateWithWhereUniqueWithoutTypeInput>;
export const ModelUpdateWithWhereUniqueWithoutTypeInputObjectZodSchema = makeSchema();
