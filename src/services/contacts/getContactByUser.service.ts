import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { tContactResponse } from '../../interfaces/contact.interfaces';
import { contactResponseSchema } from '../../schemas/contact.schemas';

export const getContactByUserService = async (userId: number, contactId: number): Promise<tContactResponse> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact = await contactRepos.findOne({
    where: { id: contactId, user: { id: userId } }
  });

  return contactResponseSchema.parse(contact);
};