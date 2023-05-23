import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { allCustomersSchema, customerResponseSchema, customerSchema } from '../schemas/customer.schemas';

export type tCustomer = z.infer<typeof customerSchema>;
export type tCustomerResponse = z.infer<typeof customerResponseSchema>;
export type tAllCustomers = z.infer<typeof allCustomersSchema>;
export type tCustomerUpdate = DeepPartial<tCustomer>;