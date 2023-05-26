import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/AppError';
import { tContactResponse, tContactUpdate } from '../../interfaces/contact.interfaces';
import { contactResponseSchema } from '../../schemas/contact.schemas';

export const updateContactService = async (userId: number, payload: tContactUpdate): Promise<tContactResponse> => {

  if (!Object.keys(payload).length) {
    throw new AppError('Request body cannot be empty. Please provide a valid JSON object in the request body.');
  }

  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  await contactRepos.update(userId, payload);
  const contactUpdated = await contactRepos.findOneBy({ id: userId });

  return contactResponseSchema.parse(contactUpdated);
};