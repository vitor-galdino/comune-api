import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string().min(3).max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
});

export const userResponseSchema = z.object({
  id: z.number(),
  ...userSchema.shape,
  createdAt: z.string(),
});

export const allUsersSchema = userResponseSchema.array();

export const userUpdateSchema = userSchema.partial();