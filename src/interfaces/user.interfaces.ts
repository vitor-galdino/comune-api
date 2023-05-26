import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { allUsersSchema, userResponseSchema, userSchema } from '../schemas/user.schemas';

export type tUser = z.infer<typeof userSchema>;
export type tUserResponse = z.infer<typeof userResponseSchema>;
export type tAllUsers = z.infer<typeof allUsersSchema>;
export type tUserUpdate = DeepPartial<tUser>;