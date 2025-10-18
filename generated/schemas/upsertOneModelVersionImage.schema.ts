import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './objects/ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './objects/ModelVersionImageWhereUniqueInput.schema';
import { ModelVersionImageCreateInputObjectSchema as ModelVersionImageCreateInputObjectSchema } from './objects/ModelVersionImageCreateInput.schema';
import { ModelVersionImageUncheckedCreateInputObjectSchema as ModelVersionImageUncheckedCreateInputObjectSchema } from './objects/ModelVersionImageUncheckedCreateInput.schema';
import { ModelVersionImageUpdateInputObjectSchema as ModelVersionImageUpdateInputObjectSchema } from './objects/ModelVersionImageUpdateInput.schema';
import { ModelVersionImageUncheckedUpdateInputObjectSchema as ModelVersionImageUncheckedUpdateInputObjectSchema } from './objects/ModelVersionImageUncheckedUpdateInput.schema';

export const ModelVersionImageUpsertOneSchema: z.ZodType<Prisma.ModelVersionImageUpsertArgs> = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema, create: z.union([ ModelVersionImageCreateInputObjectSchema, ModelVersionImageUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionImageUpdateInputObjectSchema, ModelVersionImageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageUpsertArgs>;

export const ModelVersionImageUpsertOneZodSchema = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema, create: z.union([ ModelVersionImageCreateInputObjectSchema, ModelVersionImageUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionImageUpdateInputObjectSchema, ModelVersionImageUncheckedUpdateInputObjectSchema ]) }).strict();