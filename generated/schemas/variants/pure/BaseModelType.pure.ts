import * as z from 'zod';

// prettier-ignore
export const BaseModelTypeModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    baseModelId: z.number().int(),
    modelVersions: z.array(z.unknown()),
    baseModel: z.unknown()
}).strict();

export type BaseModelTypePureType = z.infer<typeof BaseModelTypeModelSchema>;
