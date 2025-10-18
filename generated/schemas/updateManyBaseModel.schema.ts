import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelUpdateManyMutationInputObjectSchema as BaseModelUpdateManyMutationInputObjectSchema } from './objects/BaseModelUpdateManyMutationInput.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './objects/BaseModelWhereInput.schema';

export const BaseModelUpdateManySchema: z.ZodType<Prisma.BaseModelUpdateManyArgs> = z.object({ data: BaseModelUpdateManyMutationInputObjectSchema, where: BaseModelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelUpdateManyArgs>;

export const BaseModelUpdateManyZodSchema = z.object({ data: BaseModelUpdateManyMutationInputObjectSchema, where: BaseModelWhereInputObjectSchema.optional() }).strict();