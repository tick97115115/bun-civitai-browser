import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeWhereUniqueInputObjectSchema as ModelTypeWhereUniqueInputObjectSchema } from './objects/ModelTypeWhereUniqueInput.schema';

export const ModelTypeDeleteOneSchema: z.ZodType<Prisma.ModelTypeDeleteArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelTypeDeleteArgs>;

export const ModelTypeDeleteOneZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), where: ModelTypeWhereUniqueInputObjectSchema }).strict();