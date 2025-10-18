import * as z from 'zod';

export const ModelScalarFieldEnumSchema = z.enum(['id', 'name', 'creatorId', 'typeId', 'nsfw', 'nsfwLevel', 'createdAt', 'updatedAt'])

export type ModelScalarFieldEnum = z.infer<typeof ModelScalarFieldEnumSchema>;