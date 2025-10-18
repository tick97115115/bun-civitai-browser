import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereUniqueInputObjectSchema as BaseModelTypeWhereUniqueInputObjectSchema } from './BaseModelTypeWhereUniqueInput.schema';
import { BaseModelTypeCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeCreateWithoutModelVersionsInput.schema';
import { BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema as BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema } from './BaseModelTypeUncheckedCreateWithoutModelVersionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BaseModelTypeCreateWithoutModelVersionsInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedCreateWithoutModelVersionsInputObjectSchema)])
}).strict();
export const BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateOrConnectWithoutModelVersionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateOrConnectWithoutModelVersionsInput>;
export const BaseModelTypeCreateOrConnectWithoutModelVersionsInputObjectZodSchema = makeSchema();
