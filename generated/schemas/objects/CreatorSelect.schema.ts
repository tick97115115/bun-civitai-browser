import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelFindManySchema as ModelFindManySchema } from '../findManyModel.schema';
import { CreatorCountOutputTypeArgsObjectSchema as CreatorCountOutputTypeArgsObjectSchema } from './CreatorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  link: z.boolean().optional(),
  image: z.boolean().optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CreatorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CreatorSelectObjectSchema: z.ZodType<Prisma.CreatorSelect> = makeSchema() as unknown as z.ZodType<Prisma.CreatorSelect>;
export const CreatorSelectObjectZodSchema = makeSchema();
