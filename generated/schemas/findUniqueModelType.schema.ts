import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';

export const ModelTypeFindUniqueSchema: z.ZodType<Prisma.ModelTypeFindUniqueArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelTypeFindUniqueArgs>;

export const ModelTypeFindUniqueZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict();