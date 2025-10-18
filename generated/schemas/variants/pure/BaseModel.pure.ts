import * as z from 'zod';

// prettier-ignore
export const BaseModelModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    modelVersions: z.array(z.unknown()),
    baseModelTypes: z.array(z.unknown())
}).strict();

export type BaseModelPureType = z.infer<typeof BaseModelModelSchema>;
