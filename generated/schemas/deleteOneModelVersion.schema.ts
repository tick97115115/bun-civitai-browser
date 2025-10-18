import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './objects/ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';

export const ModelVersionDeleteOneSchema: z.ZodType<Prisma.ModelVersionDeleteArgs> = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionDeleteArgs>;

export const ModelVersionDeleteOneZodSchema = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema }).strict();