import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { Customer } from '../../entities/customer.entity';

export const getReportService = async (customerId: number): Promise<any> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  const customerFound = await customerRepos.findOneBy({ id: customerId });
  const contactFound = await contactRepos.find({
    where: { customer: { id: customerId } }
  });

  const customerResult = {
    ...customerFound,
    contact: [...contactFound]
  }
  return customerResult;
};