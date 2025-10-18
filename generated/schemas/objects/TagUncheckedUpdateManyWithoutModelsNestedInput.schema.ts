import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { TagCreateWithoutModelsInputObjectSchema as TagCreateWithoutModelsInputObjectSchema } from './TagCreateWithoutModelsInput.schema';
import { TagUncheckedCreateWithoutModelsInputObjectSchema as TagUncheckedCreateWithoutModelsInputObjectSchema } from './TagUncheckedCreateWithoutModelsInput.schema';
import { TagCreateOrConnectWithoutModelsInputObjectSchema as TagCreateOrConnectWithoutModelsInputObjectSchema } from './TagCreateOrConnectWithoutModelsInput.schema';
import { TagUpsertWithWhereUniqueWithoutModelsInputObjectSchema as TagUpsertWithWhereUniqueWithoutModelsInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutModelsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutModelsInputObjectSchema as TagUpdateWithWhereUniqueWithoutModelsInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutModelsInput.schema';
import { TagUpdateManyWithWhereWithoutModelsInputObjectSchema as TagUpdateManyWithWhereWithoutModelsInputObjectSchema } from './TagUpdateManyWithWhereWithoutModelsInput.schema';
import { TagScalarWhereInputObjectSchema as TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutModelsInputObjectSchema), z.lazy(() => TagCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutModelsInputObjectSchema), z.lazy(() => TagUpdateManyWithWhereWithoutModelsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagUncheckedUpdateManyWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateManyWithoutModelsNestedInput>;
export const TagUncheckedUpdateManyWithoutModelsNestedInputObjectZodSchema = makeSchema();
