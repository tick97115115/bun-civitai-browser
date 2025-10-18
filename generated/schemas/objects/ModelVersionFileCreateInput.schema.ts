import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateNestedOneWithoutFilesInputObjectSchema as ModelVersionCreateNestedOneWithoutFilesInputObjectSchema } from './ModelVersionCreateNestedOneWithoutFilesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string(),
  modelVersion: z.lazy(() => ModelVersionCreateNestedOneWithoutFilesInputObjectSchema)
}).strict();
export const ModelVersionFileCreateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateInput>;
export const ModelVersionFileCreateInputObjectZodSchema = makeSchema();
