import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateManyTypeInputObjectSchema as ModelCreateManyTypeInputObjectSchema } from './ModelCreateManyTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelCreateManyTypeInputObjectSchema), z.lazy(() => ModelCreateManyTypeInputObjectSchema).array()])
}).strict();
export const ModelCreateManyTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelCreateManyTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateManyTypeInputEnvelope>;
export const ModelCreateManyTypeInputEnvelopeObjectZodSchema = makeSchema();
