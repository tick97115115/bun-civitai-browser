import * as z from 'zod';

// prettier-ignore
export const ModelVersionImageInputSchema = z.object({
    id: z.number().int(),
    url: z.string(),
    nsfwLevel: z.number().int(),
    width: z.number().int(),
    height: z.number().int(),
    hash: z.string(),
    type: z.string(),
    modelVersionId: z.number().int(),
    modelVersion: z.unknown()
}).strict();

export type ModelVersionImageInputType = z.infer<typeof ModelVersionImageInputSchema>;
