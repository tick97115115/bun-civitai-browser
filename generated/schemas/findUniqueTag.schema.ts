import type { Prisma } from '../../src/modules/db/generated/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagFindUniqueSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagFindUniqueArgs>;

export const TagFindUniqueZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict();