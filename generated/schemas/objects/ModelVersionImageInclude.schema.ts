import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionArgsObjectSchema as ModelVersionArgsObjectSchema } from './ModelVersionArgs.schema'

const makeSchema = () => z.object({
  modelVersion: z.union([z.boolean(), z.lazy(() => ModelVersionArgsObjectSchema)]).optional()
}).strict();
export const ModelVersionImageIncludeObjectSchema: z.ZodType<Prisma.ModelVersionImageInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageInclude>;
export const ModelVersionImageIncludeObjectZodSchema = makeSchema();
