import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  name: z.string()
}).strict();
export const TagCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutModelsInput>;
export const TagCreateWithoutModelsInputObjectZodSchema = makeSchema();
