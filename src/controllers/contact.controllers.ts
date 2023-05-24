import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContact.service';
import { listContactsByCustomerService } from '../services/contacts/listContactsByCustomer.service';

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