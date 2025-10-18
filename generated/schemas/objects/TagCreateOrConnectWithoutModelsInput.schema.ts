import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutModelsInputObjectSchema as TagCreateWithoutModelsInputObjectSchema } from './TagCreateWithoutModelsInput.schema';
import { TagUncheckedCreateWithoutModelsInputObjectSchema as TagUncheckedCreateWithoutModelsInputObjectSchema } from './TagUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutModelsInput>;
export const TagCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
