import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionArgsObjectSchema as ModelVersionArgsObjectSchema } from './ModelVersionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sizeKB: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  downloadUrl: z.boolean().optional(),
  modelVersionId: z.boolean().optional(),
  modelVersion: z.union([z.boolean(), z.lazy(() => ModelVersionArgsObjectSchema)]).optional()
}).strict();
export const ModelVersionFileSelectObjectSchema: z.ZodType<Prisma.ModelVersionFileSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileSelect>;
export const ModelVersionFileSelectObjectZodSchema = makeSchema();
