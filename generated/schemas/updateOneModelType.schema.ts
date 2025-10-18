import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeUpdateInputObjectSchema as ModelTypeUpdateInputObjectSchema } from './objects/ModelTypeUpdateInput.schema';
import { ModelTypeUncheckedUpdateInputObjectSchema as ModelTypeUncheckedUpdateInputObjectSchema } from './objects/ModelTypeUncheckedUpdateInput.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';

export const ModelTypeUpdateOneSchema: z.ZodType<Prisma.ModelTypeUpdateArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), data: z.union([ModelTypeUpdateInputObjectSchema, ModelTypeUncheckedUpdateInputObjectSchema]), where: ModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelTypeUpdateArgs>;

export const ModelTypeUpdateOneZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), data: z.union([ModelTypeUpdateInputObjectSchema, ModelTypeUncheckedUpdateInputObjectSchema]), where: ModelTypeWhereUniqueInputObjectSchema }).strict();