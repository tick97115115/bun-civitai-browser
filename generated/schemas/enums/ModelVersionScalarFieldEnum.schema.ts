import * as z from 'zod';

export const ModelVersionScalarFieldEnumSchema = z.enum(['id', 'modelId', 'name', 'baseModelId', 'baseModelTypeId', 'publishedAt', 'nsfwLevel', 'createdAt', 'updatedAt'])

export type ModelVersionScalarFieldEnum = z.infer<typeof ModelVersionScalarFieldEnumSchema>;