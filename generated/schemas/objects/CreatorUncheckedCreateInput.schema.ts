import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelUncheckedCreateNestedManyWithoutCreatorInputObjectSchema as ModelUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ModelUncheckedCreateNestedManyWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  link: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  models: z.lazy(() => ModelUncheckedCreateNestedManyWithoutCreatorInputObjectSchema)
}).strict();
export const CreatorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CreatorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorUncheckedCreateInput>;
export const CreatorUncheckedCreateInputObjectZodSchema = makeSchema();
