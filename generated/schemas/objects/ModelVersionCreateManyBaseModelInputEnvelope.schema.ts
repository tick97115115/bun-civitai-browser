import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateManyBaseModelInputObjectSchema as ModelVersionCreateManyBaseModelInputObjectSchema } from './ModelVersionCreateManyBaseModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelVersionCreateManyBaseModelInputObjectSchema), z.lazy(() => ModelVersionCreateManyBaseModelInputObjectSchema).array()])
}).strict();
export const ModelVersionCreateManyBaseModelInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyBaseModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyBaseModelInputEnvelope>;
export const ModelVersionCreateManyBaseModelInputEnvelopeObjectZodSchema = makeSchema();
