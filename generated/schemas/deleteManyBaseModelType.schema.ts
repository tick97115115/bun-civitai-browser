import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './objects/BaseModelTypeWhereInput.schema';

export const BaseModelTypeDeleteManySchema: z.ZodType<Prisma.BaseModelTypeDeleteManyArgs> = z.object({ where: BaseModelTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelTypeDeleteManyArgs>;

export const BaseModelTypeDeleteManyZodSchema = z.object({ where: BaseModelTypeWhereInputObjectSchema.optional() }).strict();