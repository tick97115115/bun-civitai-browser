import * as z from 'zod';

export const BaseModelTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'baseModelId'])

export type BaseModelTypeScalarFieldEnum = z.infer<typeof BaseModelTypeScalarFieldEnumSchema>;