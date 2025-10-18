import * as z from 'zod';

// prettier-ignore
export const ModelVersionFileInputSchema = z.object({
    id: z.number().int(),
    sizeKB: z.number(),
    name: z.string(),
    type: z.string(),
    downloadUrl: z.string(),
    modelVersionId: z.number().int(),
    modelVersion: z.unknown()
}).strict();

export type ModelVersionFileInputType = z.infer<typeof ModelVersionFileInputSchema>;
