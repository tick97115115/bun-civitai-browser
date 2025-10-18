import * as z from 'zod';

// prettier-ignore
export const BaseModelTypeResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    baseModelId: z.number().int(),
    modelVersions: z.array(z.unknown()),
    baseModel: z.unknown()
}).strict();

export type BaseModelTypeResultType = z.infer<typeof BaseModelTypeResultSchema>;
