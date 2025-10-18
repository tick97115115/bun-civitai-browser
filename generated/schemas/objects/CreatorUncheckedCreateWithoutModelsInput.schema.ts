import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  link: z.string().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();
export const CreatorUncheckedCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorUncheckedCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUncheckedCreateWithoutModelsInput>;
export const CreatorUncheckedCreateWithoutModelsInputObjectZodSchema = makeSchema();
