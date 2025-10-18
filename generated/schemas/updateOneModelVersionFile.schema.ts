import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileSelectObjectSchema as ModelVersionFileSelectObjectSchema } from './objects/ModelVersionFileSelect.schema';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './objects/ModelVersionFileInclude.schema';
import { ModelVersionFileUpdateInputObjectSchema as ModelVersionFileUpdateInputObjectSchema } from './objects/ModelVersionFileUpdateInput.schema';
import { ModelVersionFileUncheckedUpdateInputObjectSchema as ModelVersionFileUncheckedUpdateInputObjectSchema } from './objects/ModelVersionFileUncheckedUpdateInput.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './objects/ModelVersionFileWhereUniqueInput.schema';

export const ModelVersionFileUpdateOneSchema: z.ZodType<Prisma.ModelVersionFileUpdateArgs> = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), data: z.union([ModelVersionFileUpdateInputObjectSchema, ModelVersionFileUncheckedUpdateInputObjectSchema]), where: ModelVersionFileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileUpdateArgs>;

export const ModelVersionFileUpdateOneZodSchema = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), data: z.union([ModelVersionFileUpdateInputObjectSchema, ModelVersionFileUncheckedUpdateInputObjectSchema]), where: ModelVersionFileWhereUniqueInputObjectSchema }).strict();