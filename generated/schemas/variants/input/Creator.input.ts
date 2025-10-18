import * as z from 'zod';

// prettier-ignore
export const CreatorInputSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    link: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    models: z.array(z.unknown())
}).strict();

export type CreatorInputType = z.infer<typeof CreatorInputSchema>;
