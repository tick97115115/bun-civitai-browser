import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateNestedManyWithoutCreatorInputObjectSchema as ModelCreateNestedManyWithoutCreatorInputObjectSchema } from './ModelCreateNestedManyWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  username: z.string(),
  link: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  models: z.lazy(() => ModelCreateNestedManyWithoutCreatorInputObjectSchema)
}).strict();
export const CreatorCreateInputObjectSchema: z.ZodType<Prisma.CreatorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorCreateInput>;
export const CreatorCreateInputObjectZodSchema = makeSchema();
