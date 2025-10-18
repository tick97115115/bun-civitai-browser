import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';

export const ModelTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.ModelTypeFindUniqueOrThrowArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelTypeFindUniqueOrThrowArgs>;

export const ModelTypeFindUniqueOrThrowZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict();