import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './objects/ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionUpdateInputObjectSchema as ModelVersionUpdateInputObjectSchema } from './objects/ModelVersionUpdateInput.schema';
import { ModelVersionUncheckedUpdateInputObjectSchema as ModelVersionUncheckedUpdateInputObjectSchema } from './objects/ModelVersionUncheckedUpdateInput.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';

export const ModelVersionUpdateOneSchema: z.ZodType<Prisma.ModelVersionUpdateArgs> = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), data: z.union([ModelVersionUpdateInputObjectSchema, ModelVersionUncheckedUpdateInputObjectSchema]), where: ModelVersionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionUpdateArgs>;

export const ModelVersionUpdateOneZodSchema = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), data: z.union([ModelVersionUpdateInputObjectSchema, ModelVersionUncheckedUpdateInputObjectSchema]), where: ModelVersionWhereUniqueInputObjectSchema }).strict();