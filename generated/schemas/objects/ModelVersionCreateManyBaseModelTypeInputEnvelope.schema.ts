import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionCreateManyBaseModelTypeInputObjectSchema as ModelVersionCreateManyBaseModelTypeInputObjectSchema } from './ModelVersionCreateManyBaseModelTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelVersionCreateManyBaseModelTypeInputObjectSchema), z.lazy(() => ModelVersionCreateManyBaseModelTypeInputObjectSchema).array()])
}).strict();
export const ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyBaseModelTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyBaseModelTypeInputEnvelope>;
export const ModelVersionCreateManyBaseModelTypeInputEnvelopeObjectZodSchema = makeSchema();
