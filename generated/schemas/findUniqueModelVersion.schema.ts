import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './objects/ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionWhereUniqueInputObjectSchema as ModelVersionWhereUniqueInputObjectSchema } from './objects/ModelVersionWhereUniqueInput.schema';

export const ModelVersionFindUniqueSchema: z.ZodType<Prisma.ModelVersionFindUniqueArgs> = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelVersionFindUniqueArgs>;

export const ModelVersionFindUniqueZodSchema = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), where: ModelVersionWhereUniqueInputObjectSchema }).strict();