import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './objects/ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './objects/ModelVersionImageWhereUniqueInput.schema';

export const ModelVersionImageDeleteOneSchema: z.ZodType<Prisma.ModelVersionImageDeleteArgs> = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageDeleteArgs>;

export const ModelVersionImageDeleteOneZodSchema = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict();