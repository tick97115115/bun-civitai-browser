import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './objects/ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';
import { ModelVersionCreateInputObjectSchema as ModelVersionCreateInputObjectSchema } from './objects/ModelVersionCreateInput.schema';
import { ModelVersionUncheckedCreateInputObjectSchema as ModelVersionUncheckedCreateInputObjectSchema } from './objects/ModelVersionUncheckedCreateInput.schema';
import { ModelVersionUpdateInputObjectSchema as ModelVersionUpdateInputObjectSchema } from './objects/ModelVersionUpdateInput.schema';
import { ModelVersionUncheckedUpdateInputObjectSchema as ModelVersionUncheckedUpdateInputObjectSchema } from './objects/ModelVersionUncheckedUpdateInput.schema';

export const ModelVersionUpsertOneSchema: z.ZodType<Prisma.ModelVersionUpsertArgs> = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema, create: z.union([ ModelVersionCreateInputObjectSchema, ModelVersionUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionUpdateInputObjectSchema, ModelVersionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionUpsertArgs>;

export const ModelVersionUpsertOneZodSchema = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema, create: z.union([ ModelVersionCreateInputObjectSchema, ModelVersionUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionUpdateInputObjectSchema, ModelVersionUncheckedUpdateInputObjectSchema ]) }).strict();