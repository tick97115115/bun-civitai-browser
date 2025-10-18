import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileCreateManyModelVersionInputObjectSchema as ModelVersionFileCreateManyModelVersionInputObjectSchema } from './ModelVersionFileCreateManyModelVersionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelVersionFileCreateManyModelVersionInputObjectSchema), z.lazy(() => ModelVersionFileCreateManyModelVersionInputObjectSchema).array()])
}).strict();
export const ModelVersionFileCreateManyModelVersionInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelVersionFileCreateManyModelVersionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCreateManyModelVersionInputEnvelope>;
export const ModelVersionFileCreateManyModelVersionInputEnvelopeObjectZodSchema = makeSchema();
