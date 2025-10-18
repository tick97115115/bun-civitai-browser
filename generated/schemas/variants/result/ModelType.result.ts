import * as z from 'zod';

// prettier-ignore
export const ModelTypeResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    models: z.array(z.unknown())
}).strict();

export type ModelTypeResultType = z.infer<typeof ModelTypeResultSchema>;
