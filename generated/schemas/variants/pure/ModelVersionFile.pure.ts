import * as z from 'zod';

// prettier-ignore
export const ModelVersionFileModelSchema = z.object({
    id: z.number().int(),
    sizeKB: z.number(),
    name: z.string(),
    type: z.string(),
    downloadUrl: z.string(),
    modelVersionId: z.number().int(),
    modelVersion: z.unknown()
}).strict();

export type ModelVersionFilePureType = z.infer<typeof ModelVersionFileModelSchema>;
