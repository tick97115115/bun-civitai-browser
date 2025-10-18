import * as z from 'zod';

// prettier-ignore
export const BaseModelInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    modelVersions: z.array(z.unknown()),
    baseModelTypes: z.array(z.unknown())
}).strict();

export type BaseModelInputType = z.infer<typeof BaseModelInputSchema>;
