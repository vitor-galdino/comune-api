import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/AppError';
import { tAllContacts } from '../../interfaces/contact.interfaces';
import { allContactsSchema } from '../../schemas/contact.schemas';

export const listContactsByCustomerService = async (customerId: number): Promise<tAllContacts> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts = await contactRepos.find({
    where: { customer: { id: customerId } }
  });

  if (!contacts.length) {
    throw new AppError('Customer dont have contacts', 404);
  }

  return allContactsSchema.parse(contacts);
};