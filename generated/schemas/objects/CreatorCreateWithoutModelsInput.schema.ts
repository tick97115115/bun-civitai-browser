import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  username: z.string(),
  link: z.string().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();
export const CreatorCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.CreatorCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCreateWithoutModelsInput>;
export const CreatorCreateWithoutModelsInputObjectZodSchema = makeSchema();
