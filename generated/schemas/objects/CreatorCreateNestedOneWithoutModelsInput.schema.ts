import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorCreateWithoutModelsInputObjectSchema as CreatorCreateWithoutModelsInputObjectSchema } from './CreatorCreateWithoutModelsInput.schema';
import { CreatorUncheckedCreateWithoutModelsInputObjectSchema as CreatorUncheckedCreateWithoutModelsInputObjectSchema } from './CreatorUncheckedCreateWithoutModelsInput.schema';
import { CreatorCreateOrConnectWithoutModelsInputObjectSchema as CreatorCreateOrConnectWithoutModelsInputObjectSchema } from './CreatorCreateOrConnectWithoutModelsInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './CreatorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CreatorCreateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CreatorCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => CreatorWhereUniqueInputObjectSchema).optional()
}).strict();
export const CreatorCreateNestedOneWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorCreateNestedOneWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCreateNestedOneWithoutModelsInput>;
export const CreatorCreateNestedOneWithoutModelsInputObjectZodSchema = makeSchema();
