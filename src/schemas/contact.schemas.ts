import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(3).max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
});

export const contactResponseSchema = z.object({
  id: z.number(),
  ...contactSchema.shape,
  createdAt: z.string(),
});

export const allContactsSchema = contactResponseSchema.array();