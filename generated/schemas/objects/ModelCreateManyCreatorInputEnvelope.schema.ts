import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelCreateManyCreatorInputObjectSchema as ModelCreateManyCreatorInputObjectSchema } from './ModelCreateManyCreatorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelCreateManyCreatorInputObjectSchema), z.lazy(() => ModelCreateManyCreatorInputObjectSchema).array()])
}).strict();
export const ModelCreateManyCreatorInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelCreateManyCreatorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateManyCreatorInputEnvelope>;
export const ModelCreateManyCreatorInputEnvelopeObjectZodSchema = makeSchema();
