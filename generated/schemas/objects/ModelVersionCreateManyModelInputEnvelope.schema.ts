import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateManyModelInputObjectSchema as ModelVersionCreateManyModelInputObjectSchema } from './ModelVersionCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelVersionCreateManyModelInputObjectSchema), z.lazy(() => ModelVersionCreateManyModelInputObjectSchema).array()])
}).strict();
export const ModelVersionCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyModelInputEnvelope>;
export const ModelVersionCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
