import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { ModelVersionImageSelectObjectSchema as ModelVersionImageSelectObjectSchema } from './objects/ModelVersionImageSelect.schema';
import { ModelVersionImageIncludeObjectSchema as ModelVersionImageIncludeObjectSchema } from './objects/ModelVersionImageInclude.schema';
import { ModelVersionImageCreateInputObjectSchema as ModelVersionImageCreateInputObjectSchema } from './objects/ModelVersionImageCreateInput.schema';
import { ModelVersionImageUncheckedCreateInputObjectSchema as ModelVersionImageUncheckedCreateInputObjectSchema } from './objects/ModelVersionImageUncheckedCreateInput.schema';

export const ModelVersionImageCreateOneSchema: z.ZodType<Prisma.ModelVersionImageCreateArgs> = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), data: z.union([ModelVersionImageCreateInputObjectSchema, ModelVersionImageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelVersionImageCreateArgs>;

export const ModelVersionImageCreateOneZodSchema = z.object({ select: ModelVersionImageSelectObjectSchema.optional(), include: ModelVersionImageIncludeObjectSchema.optional(), data: z.union([ModelVersionImageCreateInputObjectSchema, ModelVersionImageUncheckedCreateInputObjectSchema]) }).strict();