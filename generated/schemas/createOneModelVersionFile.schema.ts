import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileSelectObjectSchema as ModelVersionFileSelectObjectSchema } from './objects/ModelVersionFileSelect.schema';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './objects/ModelVersionFileInclude.schema';
import { ModelVersionFileCreateInputObjectSchema as ModelVersionFileCreateInputObjectSchema } from './objects/ModelVersionFileCreateInput.schema';
import { ModelVersionFileUncheckedCreateInputObjectSchema as ModelVersionFileUncheckedCreateInputObjectSchema } from './objects/ModelVersionFileUncheckedCreateInput.schema';

export const ModelVersionFileCreateOneSchema: z.ZodType<Prisma.ModelVersionFileCreateArgs> = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), data: z.union([ModelVersionFileCreateInputObjectSchema, ModelVersionFileUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileCreateArgs>;

export const ModelVersionFileCreateOneZodSchema = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), data: z.union([ModelVersionFileCreateInputObjectSchema, ModelVersionFileUncheckedCreateInputObjectSchema]) }).strict();