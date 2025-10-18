import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionSelectObjectSchema as ModelVersionSelectObjectSchema } from './objects/ModelVersionSelect.schema';
import { ModelVersionIncludeObjectSchema as ModelVersionIncludeObjectSchema } from './objects/ModelVersionInclude.schema';
import { ModelVersionCreateInputObjectSchema as ModelVersionCreateInputObjectSchema } from './objects/ModelVersionCreateInput.schema';
import { ModelVersionUncheckedCreateInputObjectSchema as ModelVersionUncheckedCreateInputObjectSchema } from './objects/ModelVersionUncheckedCreateInput.schema';

export const ModelVersionCreateOneSchema: z.ZodType<Prisma.ModelVersionCreateArgs> = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), data: z.union([ModelVersionCreateInputObjectSchema, ModelVersionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionCreateArgs>;

export const ModelVersionCreateOneZodSchema = z.object({ select: ModelVersionSelectObjectSchema.optional(), include: ModelVersionIncludeObjectSchema.optional(), data: z.union([ModelVersionCreateInputObjectSchema, ModelVersionUncheckedCreateInputObjectSchema]) }).strict();