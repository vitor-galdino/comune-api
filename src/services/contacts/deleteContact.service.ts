import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';

export const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);
  const contactFound = await contactRepos.findOneBy({ id: contactId });
  contactRepos.delete(contactFound!.id);
};