import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionArgsObjectSchema as ModelVersionArgsObjectSchema } from './ModelVersionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  nsfwLevel: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  hash: z.boolean().optional(),
  type: z.boolean().optional(),
  modelVersionId: z.boolean().optional(),
  modelVersion: z.union([z.boolean(), z.lazy(() => ModelVersionArgsObjectSchema)]).optional()
}).strict();
export const ModelVersionImageSelectObjectSchema: z.ZodType<Prisma.ModelVersionImageSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageSelect>;
export const ModelVersionImageSelectObjectZodSchema = makeSchema();
