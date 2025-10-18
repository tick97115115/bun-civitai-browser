import * as z from 'zod';

// prettier-ignore
export const ModelResultSchema = z.object({
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

export type ModelResultType = z.infer<typeof ModelResultSchema>;
