import { z } from 'zod';

export const customerSchema = z.object({
  fullName: z.string().min(3).max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
});

export const customerResponseSchema = z.object({
  id: z.number(),
  ...customerSchema.shape,
  createdAt: z.string(),
});

export const allCustomersSchema = customerResponseSchema.array();

export const customerUpdateSchema = customerSchema.partial();