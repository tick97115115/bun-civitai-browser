import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorUpdateWithoutModelsInputObjectSchema as CreatorUpdateWithoutModelsInputObjectSchema } from './CreatorUpdateWithoutModelsInput.schema';
import { CreatorUncheckedUpdateWithoutModelsInputObjectSchema as CreatorUncheckedUpdateWithoutModelsInputObjectSchema } from './CreatorUncheckedUpdateWithoutModelsInput.schema';
import { CreatorCreateWithoutModelsInputObjectSchema as CreatorCreateWithoutModelsInputObjectSchema } from './CreatorCreateWithoutModelsInput.schema';
import { CreatorUncheckedCreateWithoutModelsInputObjectSchema as CreatorUncheckedCreateWithoutModelsInputObjectSchema } from './CreatorUncheckedCreateWithoutModelsInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './CreatorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CreatorUpdateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => CreatorCreateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedCreateWithoutModelsInputObjectSchema)]),
  where: z.lazy(() => CreatorWhereInputObjectSchema).optional()
}).strict();
export const CreatorUpsertWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorUpsertWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUpsertWithoutModelsInput>;
export const CreatorUpsertWithoutModelsInputObjectZodSchema = makeSchema();
