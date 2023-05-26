import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/AppError';
import { tAllContacts } from '../../interfaces/contact.interfaces';
import { allContactsSchema } from '../../schemas/contact.schemas';

export const listContactsByUserService = async (userId: number): Promise<tAllContacts> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts = await contactRepos.find({
    where: { customer: { id: userId } }
  });

  if (!contacts.length) {
    throw new AppError('Customer dont have contacts', 404);
  }

  return allContactsSchema.parse(contacts);
};