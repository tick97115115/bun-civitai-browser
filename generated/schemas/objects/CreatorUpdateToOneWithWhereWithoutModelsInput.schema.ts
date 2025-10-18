import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './CreatorWhereInput.schema';
import { CreatorUpdateWithoutModelsInputObjectSchema as CreatorUpdateWithoutModelsInputObjectSchema } from './CreatorUpdateWithoutModelsInput.schema';
import { CreatorUncheckedUpdateWithoutModelsInputObjectSchema as CreatorUncheckedUpdateWithoutModelsInputObjectSchema } from './CreatorUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CreatorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CreatorUpdateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const CreatorUpdateToOneWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorUpdateToOneWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUpdateToOneWithWhereWithoutModelsInput>;
export const CreatorUpdateToOneWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
