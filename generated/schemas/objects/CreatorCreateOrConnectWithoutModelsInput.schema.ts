import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './CreatorWhereUniqueInput.schema';
import { CreatorCreateWithoutModelsInputObjectSchema as CreatorCreateWithoutModelsInputObjectSchema } from './CreatorCreateWithoutModelsInput.schema';
import { CreatorUncheckedCreateWithoutModelsInputObjectSchema as CreatorUncheckedCreateWithoutModelsInputObjectSchema } from './CreatorUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CreatorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CreatorCreateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const CreatorCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCreateOrConnectWithoutModelsInput>;
export const CreatorCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
