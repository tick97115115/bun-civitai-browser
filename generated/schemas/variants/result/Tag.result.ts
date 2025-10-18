import * as z from 'zod';

// prettier-ignore
export const TagResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    models: z.array(z.unknown())
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
