import * as z from 'zod';

// prettier-ignore
export const ModelTypeModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    models: z.array(z.unknown())
}).strict();

export type ModelTypePureType = z.infer<typeof ModelTypeModelSchema>;
