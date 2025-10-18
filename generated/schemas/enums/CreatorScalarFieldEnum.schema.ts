import * as z from 'zod';

export const CreatorScalarFieldEnumSchema = z.enum(['id', 'username', 'link', 'image'])

export type CreatorScalarFieldEnum = z.infer<typeof CreatorScalarFieldEnumSchema>;