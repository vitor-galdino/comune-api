import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContact.service';
import { deleteContactService } from '../services/contacts/deleteContact.service';
import { getContactByUserService } from '../services/contacts/getContactByUser.service';
import { listContactsByUserService } from '../services/contacts/listContactsByUser.service';
import { updateContactService } from '../services/contacts/updateContact.service';

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  const contactData = await createContactService(userId, req.body);
  return res.status(201).json(contactData);
};

export const listContactsByUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  const contactData = await listContactsByUserService(userId);
  return res.json(contactData);
};

export const getContactByUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  const contactId: number = parseInt(req.params.contactId);
  const contactData = await getContactByUserService(userId, contactId);
  return res.json(contactData);
};

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactId: number = parseInt(req.params.contactId);
  const contactData = await updateContactService(contactId, req.body);
  return res.json(contactData);
};

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactId: number = parseInt(req.params.contactId);
  await deleteContactService(contactId);
  return res.status(204).send();
};