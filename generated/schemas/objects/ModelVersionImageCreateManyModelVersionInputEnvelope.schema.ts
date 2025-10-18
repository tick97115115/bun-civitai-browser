import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageCreateManyModelVersionInputObjectSchema as ModelVersionImageCreateManyModelVersionInputObjectSchema } from './ModelVersionImageCreateManyModelVersionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelVersionImageCreateManyModelVersionInputObjectSchema), z.lazy(() => ModelVersionImageCreateManyModelVersionInputObjectSchema).array()])
}).strict();
export const ModelVersionImageCreateManyModelVersionInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelVersionImageCreateManyModelVersionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCreateManyModelVersionInputEnvelope>;
export const ModelVersionImageCreateManyModelVersionInputEnvelopeObjectZodSchema = makeSchema();
