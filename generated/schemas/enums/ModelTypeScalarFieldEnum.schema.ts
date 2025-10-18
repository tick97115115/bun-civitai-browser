import * as z from 'zod';

export const ModelTypeScalarFieldEnumSchema = z.enum(['id', 'name'])

export type ModelTypeScalarFieldEnum = z.infer<typeof ModelTypeScalarFieldEnumSchema>;