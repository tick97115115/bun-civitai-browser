import * as z from 'zod';

export const BaseModelScalarFieldEnumSchema = z.enum(['id', 'name'])

export type BaseModelScalarFieldEnum = z.infer<typeof BaseModelScalarFieldEnumSchema>;