import * as z from 'zod';

// prettier-ignore
export const BaseModelResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    modelVersions: z.array(z.unknown()),
    baseModelTypes: z.array(z.unknown())
}).strict();

export type BaseModelResultType = z.infer<typeof BaseModelResultSchema>;
