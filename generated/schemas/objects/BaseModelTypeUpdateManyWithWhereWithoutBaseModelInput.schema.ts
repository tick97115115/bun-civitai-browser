import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeScalarWhereInputObjectSchema as BaseModelTypeScalarWhereInputObjectSchema } from './BaseModelTypeScalarWhereInput.schema';
import { BaseModelTypeUpdateManyMutationInputObjectSchema as BaseModelTypeUpdateManyMutationInputObjectSchema } from './BaseModelTypeUpdateManyMutationInput.schema';
import { BaseModelTypeUncheckedUpdateManyWithoutBaseModelInputObjectSchema as BaseModelTypeUncheckedUpdateManyWithoutBaseModelInputObjectSchema } from './BaseModelTypeUncheckedUpdateManyWithoutBaseModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BaseModelTypeUpdateManyMutationInputObjectSchema), z.lazy(() => BaseModelTypeUncheckedUpdateManyWithoutBaseModelInputObjectSchema)])
}).strict();
export const BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectSchema: z.ZodType<Prisma.BaseModelTypeUpdateManyWithWhereWithoutBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateManyWithWhereWithoutBaseModelInput>;
export const BaseModelTypeUpdateManyWithWhereWithoutBaseModelInputObjectZodSchema = makeSchema();
