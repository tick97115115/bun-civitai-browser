import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileSelectObjectSchema as ModelVersionFileSelectObjectSchema } from './objects/ModelVersionFileSelect.schema';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './objects/ModelVersionFileInclude.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './objects/ModelVersionFileWhereUniqueInput.schema';
import { ModelVersionFileCreateInputObjectSchema as ModelVersionFileCreateInputObjectSchema } from './objects/ModelVersionFileCreateInput.schema';
import { ModelVersionFileUncheckedCreateInputObjectSchema as ModelVersionFileUncheckedCreateInputObjectSchema } from './objects/ModelVersionFileUncheckedCreateInput.schema';
import { ModelVersionFileUpdateInputObjectSchema as ModelVersionFileUpdateInputObjectSchema } from './objects/ModelVersionFileUpdateInput.schema';
import { ModelVersionFileUncheckedUpdateInputObjectSchema as ModelVersionFileUncheckedUpdateInputObjectSchema } from './objects/ModelVersionFileUncheckedUpdateInput.schema';

export const ModelVersionFileUpsertOneSchema: z.ZodType<Prisma.ModelVersionFileUpsertArgs> = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), where: ModelVersionFileWhereUniqueInputObjectSchema, create: z.union([ ModelVersionFileCreateInputObjectSchema, ModelVersionFileUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionFileUpdateInputObjectSchema, ModelVersionFileUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileUpsertArgs>;

export const ModelVersionFileUpsertOneZodSchema = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), where: ModelVersionFileWhereUniqueInputObjectSchema, create: z.union([ ModelVersionFileCreateInputObjectSchema, ModelVersionFileUncheckedCreateInputObjectSchema ]), update: z.union([ ModelVersionFileUpdateInputObjectSchema, ModelVersionFileUncheckedUpdateInputObjectSchema ]) }).strict();