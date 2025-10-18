import * as z from 'zod';

// prettier-ignore
export const BaseModelTypeInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    baseModelId: z.number().int(),
    modelVersions: z.array(z.unknown()),
    baseModel: z.unknown()
}).strict();

export type BaseModelTypeInputType = z.infer<typeof BaseModelTypeInputSchema>;
