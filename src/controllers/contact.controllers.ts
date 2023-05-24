import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContact.service';
import { listContactsByCustomerService } from '../services/contacts/listContactsByCustomer.service';
import { getContactByCustomerService } from '../services/contacts/getContactByCustomer.service';

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
  const customerId: number = parseInt(req.params.customerId);
  const contactData = await createContactService(customerId, req.body);
  return res.status(201).json(contactData);
};

export const listContactsByCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const customerId: number = parseInt(req.params.customerId);
  const contactData = await listContactsByCustomerService(customerId);
  return res.json(contactData);
};

export const getContactByCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const customerId: number = parseInt(req.params.customerId);
  const contactId: number = parseInt(req.params.contactId);
  const contactData = await getContactByCustomerService(customerId, contactId);
  return res.json(contactData);
};