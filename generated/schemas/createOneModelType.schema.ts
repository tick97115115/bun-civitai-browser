import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelTypeSelectObjectSchema as ModelTypeSelectObjectSchema } from './objects/ModelTypeSelect.schema';
import { ModelTypeIncludeObjectSchema as ModelTypeIncludeObjectSchema } from './objects/ModelTypeInclude.schema';
import { ModelTypeCreateInputObjectSchema as ModelTypeCreateInputObjectSchema } from './objects/ModelTypeCreateInput.schema';
import { ModelTypeUncheckedCreateInputObjectSchema as ModelTypeUncheckedCreateInputObjectSchema } from './objects/ModelTypeUncheckedCreateInput.schema';

export const ModelTypeCreateOneSchema: z.ZodType<Prisma.ModelTypeCreateArgs> = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), data: z.union([ModelTypeCreateInputObjectSchema, ModelTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelTypeCreateArgs>;

export const ModelTypeCreateOneZodSchema = z.object({ select: ModelTypeSelectObjectSchema.optional(), include: ModelTypeIncludeObjectSchema.optional(), data: z.union([ModelTypeCreateInputObjectSchema, ModelTypeUncheckedCreateInputObjectSchema]) }).strict();