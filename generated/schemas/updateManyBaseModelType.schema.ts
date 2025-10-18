import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeUpdateManyMutationInputObjectSchema as BaseModelTypeUpdateManyMutationInputObjectSchema } from './objects/BaseModelTypeUpdateManyMutationInput.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './objects/BaseModelTypeWhereInput.schema';

export const BaseModelTypeUpdateManySchema: z.ZodType<Prisma.BaseModelTypeUpdateManyArgs> = z.object({ data: BaseModelTypeUpdateManyMutationInputObjectSchema, where: BaseModelTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeUpdateManyArgs>;

export const BaseModelTypeUpdateManyZodSchema = z.object({ data: BaseModelTypeUpdateManyMutationInputObjectSchema, where: BaseModelTypeWhereInputObjectSchema.optional() }).strict();