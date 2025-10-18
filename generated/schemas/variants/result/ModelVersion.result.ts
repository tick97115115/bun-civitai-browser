import * as z from 'zod';

// prettier-ignore
export const ModelVersionResultSchema = z.object({
    id: z.number().int(),
    modelId: z.number().int(),
    name: z.string(),
    baseModelId: z.number().int(),
    baseModelTypeId: z.number().int().nullable(),
    publishedAt: z.date().nullable(),
    nsfwLevel: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    model: z.unknown(),
    baseModel: z.unknown(),
    baseModelType: z.unknown().nullable(),
    files: z.array(z.unknown()),
    images: z.array(z.unknown())
}).strict();

export type ModelVersionResultType = z.infer<typeof ModelVersionResultSchema>;
