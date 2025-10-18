import * as z from 'zod';

// prettier-ignore
export const ModelVersionInputSchema = z.object({
    id: z.number().int(),
    modelId: z.number().int(),
    name: z.string(),
    baseModelId: z.number().int(),
    baseModelTypeId: z.number().int().optional().nullable(),
    publishedAt: z.date().optional().nullable(),
    nsfwLevel: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    model: z.unknown(),
    baseModel: z.unknown(),
    baseModelType: z.unknown().optional().nullable(),
    files: z.array(z.unknown()),
    images: z.array(z.unknown())
}).strict();

export type ModelVersionInputType = z.infer<typeof ModelVersionInputSchema>;
