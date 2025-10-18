import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorCreateWithoutModelsInputObjectSchema as CreatorCreateWithoutModelsInputObjectSchema } from './CreatorCreateWithoutModelsInput.schema';
import { CreatorUncheckedCreateWithoutModelsInputObjectSchema as CreatorUncheckedCreateWithoutModelsInputObjectSchema } from './CreatorUncheckedCreateWithoutModelsInput.schema';
import { CreatorCreateOrConnectWithoutModelsInputObjectSchema as CreatorCreateOrConnectWithoutModelsInputObjectSchema } from './CreatorCreateOrConnectWithoutModelsInput.schema';
import { CreatorUpsertWithoutModelsInputObjectSchema as CreatorUpsertWithoutModelsInputObjectSchema } from './CreatorUpsertWithoutModelsInput.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './CreatorWhereInput.schema';
import { CreatorWhereUniqueInputObjectSchema as CreatorWhereUniqueInputObjectSchema } from './CreatorWhereUniqueInput.schema';
import { CreatorUpdateToOneWithWhereWithoutModelsInputObjectSchema as CreatorUpdateToOneWithWhereWithoutModelsInputObjectSchema } from './CreatorUpdateToOneWithWhereWithoutModelsInput.schema';
import { CreatorUpdateWithoutModelsInputObjectSchema as CreatorUpdateWithoutModelsInputObjectSchema } from './CreatorUpdateWithoutModelsInput.schema';
import { CreatorUncheckedUpdateWithoutModelsInputObjectSchema as CreatorUncheckedUpdateWithoutModelsInputObjectSchema } from './CreatorUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CreatorCreateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CreatorCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  upsert: z.lazy(() => CreatorUpsertWithoutModelsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CreatorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CreatorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CreatorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CreatorUpdateToOneWithWhereWithoutModelsInputObjectSchema), z.lazy(() => CreatorUpdateWithoutModelsInputObjectSchema), z.lazy(() => CreatorUncheckedUpdateWithoutModelsInputObjectSchema)]).optional()
}).strict();
export const CreatorUpdateOneWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.CreatorUpdateOneWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUpdateOneWithoutModelsNestedInput>;
export const CreatorUpdateOneWithoutModelsNestedInputObjectZodSchema = makeSchema();
