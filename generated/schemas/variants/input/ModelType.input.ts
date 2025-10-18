import * as z from 'zod';

// prettier-ignore
export const ModelTypeInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    models: z.array(z.unknown())
}).strict();

export type ModelTypeInputType = z.infer<typeof ModelTypeInputSchema>;
