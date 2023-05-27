import { z } from 'zod';
import { contactResponseSchema } from './contact.schemas';

export const userSchema = z.object({
  fullName: z.string().min(3).max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
  password: z.string().min(3).max(120),
});

export const userResponseSchema = z.object({
  id: z.number(),
  ...userSchema.shape,
  createdAt: z.string(),
}).omit({ password: true });

export const userAndContactsSchema = z.object({
  ...userResponseSchema.shape,
  contacts: contactResponseSchema.array()
});

export const allUsersSchema = userResponseSchema.array();

export const userUpdateSchema = userSchema.partial();