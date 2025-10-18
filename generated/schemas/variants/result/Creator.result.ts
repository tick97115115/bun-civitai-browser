import * as z from 'zod';

// prettier-ignore
export const CreatorResultSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    link: z.string().nullable(),
    image: z.string().nullable(),
    models: z.array(z.unknown())
}).strict();

export type CreatorResultType = z.infer<typeof CreatorResultSchema>;
