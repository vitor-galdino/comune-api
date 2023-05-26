import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { allCustomersSchema, customerResponseSchema, customerSchema } from '../schemas/user.schemas';

export type tUser = z.infer<typeof customerSchema>;
export type tUserResponse = z.infer<typeof customerResponseSchema>;
export type tAllUsers = z.infer<typeof allCustomersSchema>;
export type tUserUpdate = DeepPartial<tUser>;