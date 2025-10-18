import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './objects/BaseModelWhereInput.schema';

export const BaseModelDeleteManySchema: z.ZodType<Prisma.BaseModelDeleteManyArgs> = z.object({ where: BaseModelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BaseModelDeleteManyArgs>;

export const BaseModelDeleteManyZodSchema = z.object({ where: BaseModelWhereInputObjectSchema.optional() }).strict();