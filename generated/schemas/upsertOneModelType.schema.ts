import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';
import { ModelTypeCreateInputObjectSchema as ModelTypeCreateInputObjectSchema } from './objects/ModelTypeCreateInput.schema';
import { ModelTypeUncheckedCreateInputObjectSchema as ModelTypeUncheckedCreateInputObjectSchema } from './objects/ModelTypeUncheckedCreateInput.schema';
import { ModelTypeUpdateInputObjectSchema as ModelTypeUpdateInputObjectSchema } from './objects/ModelTypeUpdateInput.schema';
import { ModelTypeUncheckedUpdateInputObjectSchema as ModelTypeUncheckedUpdateInputObjectSchema } from './objects/ModelTypeUncheckedUpdateInput.schema';

export const ModelTypeUpsertOneSchema: z.ZodType<Prisma.ModelTypeUpsertArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema, create: z.union([ ModelTypeCreateInputObjectSchema, ModelTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ModelTypeUpdateInputObjectSchema, ModelTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelTypeUpsertArgs>;

export const ModelTypeUpsertOneZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema, create: z.union([ ModelTypeCreateInputObjectSchema, ModelTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ModelTypeUpdateInputObjectSchema, ModelTypeUncheckedUpdateInputObjectSchema ]) }).strict();