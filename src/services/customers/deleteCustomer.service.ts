import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';

export const deleteCustomerService = async (id: number): Promise<void> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const customerFound = await customerRepos.findOneBy({ id });
  await customerRepos.remove(customerFound!);
};