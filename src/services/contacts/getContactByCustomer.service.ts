import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { tContactResponse } from '../../interfaces/contact.interfaces';
import { contactResponseSchema } from '../../schemas/contact.schemas';

export const getContactByCustomerService = async (customerId: number, contactId: number): Promise<tContactResponse> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);
  
  const contact = await contactRepos.findOne({
    where: { id: contactId, customer: { id: customerId } }
  });

  return contactResponseSchema.parse(contact);
};