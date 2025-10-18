import * as z from 'zod';

export const ModelVersionFileScalarFieldEnumSchema = z.enum(['id', 'sizeKB', 'name', 'type', 'downloadUrl', 'modelVersionId'])

export type ModelVersionFileScalarFieldEnum = z.infer<typeof ModelVersionFileScalarFieldEnumSchema>;