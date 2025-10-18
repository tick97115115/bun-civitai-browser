import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionFileSelectObjectSchema as ModelVersionFileSelectObjectSchema } from './objects/ModelVersionFileSelect.schema';
import { ModelVersionFileIncludeObjectSchema as ModelVersionFileIncludeObjectSchema } from './objects/ModelVersionFileInclude.schema';
import { ModelVersionFileWhereUniqueInputObjectSchema as ModelVersionFileWhereUniqueInputObjectSchema } from './objects/ModelVersionFileWhereUniqueInput.schema';

export const ModelVersionFileFindUniqueOrThrowSchema: z.ZodType<Prisma.ModelVersionFileFindUniqueOrThrowArgs> = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), where: ModelVersionFileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionFileFindUniqueOrThrowArgs>;

export const ModelVersionFileFindUniqueOrThrowZodSchema = z.object({ select: ModelVersionFileSelectObjectSchema.optional(), include: ModelVersionFileIncludeObjectSchema.optional(), where: ModelVersionFileWhereUniqueInputObjectSchema }).strict();