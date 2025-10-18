import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './objects/ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageWhereUniqueInputObjectSchema as ModelVersionImageWhereUniqueInputObjectSchema } from './objects/ModelVersionImageWhereUniqueInput.schema';

export const ModelVersionImageFindUniqueSchema: z.ZodType<Prisma.ModelVersionImageFindUniqueArgs> = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageFindUniqueArgs>;

export const ModelVersionImageFindUniqueZodSchema = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), where: ModelVersionImageWhereUniqueInputObjectSchema }).strict();