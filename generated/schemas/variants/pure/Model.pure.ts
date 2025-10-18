import * as z from 'zod';

// prettier-ignore
export const ModelModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    creatorId: z.number().int().nullable(),
    typeId: z.number().int(),
    nsfw: z.boolean(),
    nsfwLevel: z.number().int(),
    modelVersions: z.array(z.unknown()),
    tags: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    creator: z.unknown().nullable(),
    type: z.unknown()
}).strict();

export type ModelPureType = z.infer<typeof ModelModelSchema>;
