import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Contact } from '../entities/contact.entity';
import { AppError } from '../errors/AppError';

export const ensureContactExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);
  const contactId: number = parseInt(req.params.contactId);
  const customerId: number = parseInt(req.params.customerId);

  const contactFound = await contactRepos.findOne({
    where: { id: contactId, customer: { id: customerId } }
  });

  if (!contactFound) {
    throw new AppError('Contact not found', 404);
  }

  return next();
};