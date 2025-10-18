import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagCreateWithoutModelsInputObjectSchema as TagCreateWithoutModelsInputObjectSchema } from './TagCreateWithoutModelsInput.schema';
import { TagUncheckedCreateWithoutModelsInputObjectSchema as TagUncheckedCreateWithoutModelsInputObjectSchema } from './TagUncheckedCreateWithoutModelsInput.schema';
import { TagCreateOrConnectWithoutModelsInputObjectSchema as TagCreateOrConnectWithoutModelsInputObjectSchema } from './TagCreateOrConnectWithoutModelsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutModelsInputObjectSchema), z.lazy(() => TagCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagCreateNestedManyWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedManyWithoutModelsInput>;
export const TagCreateNestedManyWithoutModelsInputObjectZodSchema = makeSchema();
