import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './objects/ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageUpdateInputObjectSchema as ModelVersionImageUpdateInputObjectSchema } from './objects/ModelVersionImageUpdateInput.schema';
import { ModelVersionImageUncheckedUpdateInputObjectSchema as ModelVersionImageUncheckedUpdateInputObjectSchema } from './objects/ModelVersionImageUncheckedUpdateInput.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './objects/ModelVersionImageWhereUniqueInput.schema';

export const ModelVersionImageUpdateOneSchema: z.ZodType<Prisma.ModelVersionImageUpdateArgs> = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), data: z.union([ModelVersionImageUpdateInputObjectSchema, ModelVersionImageUncheckedUpdateInputObjectSchema]), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageUpdateArgs>;

export const ModelVersionImageUpdateOneZodSchema = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), data: z.union([ModelVersionImageUpdateInputObjectSchema, ModelVersionImageUncheckedUpdateInputObjectSchema]), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict();