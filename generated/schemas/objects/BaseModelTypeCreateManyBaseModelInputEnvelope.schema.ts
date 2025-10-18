import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeCreateManyBaseModelInputObjectSchema as BaseModelTypeCreateManyBaseModelInputObjectSchema } from './BaseModelTypeCreateManyBaseModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BaseModelTypeCreateManyBaseModelInputObjectSchema), z.lazy(() => BaseModelTypeCreateManyBaseModelInputObjectSchema).array()])
}).strict();
export const BaseModelTypeCreateManyBaseModelInputEnvelopeObjectSchema: z.ZodType<Prisma.BaseModelTypeCreateManyBaseModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCreateManyBaseModelInputEnvelope>;
export const BaseModelTypeCreateManyBaseModelInputEnvelopeObjectZodSchema = makeSchema();
