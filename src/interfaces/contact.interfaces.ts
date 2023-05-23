import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { allContactsSchema, contactResponseSchema, contactSchema } from '../schemas/contact.schemas';

export type tContact = z.infer<typeof contactSchema>;
export type tContactResponse = z.infer<typeof contactResponseSchema>;
export type tAllContacts = z.infer<typeof allContactsSchema>;
export type tContactUpdate = DeepPartial<tContact>;