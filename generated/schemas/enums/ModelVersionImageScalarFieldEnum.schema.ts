import * as z from 'zod';

export const ModelVersionImageScalarFieldEnumSchema = z.enum(['id', 'url', 'nsfwLevel', 'width', 'height', 'hash', 'type', 'modelVersionId'])

export type ModelVersionImageScalarFieldEnum = z.infer<typeof ModelVersionImageScalarFieldEnumSchema>;