import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { tAllCustomers } from '../../interfaces/customer.interfaces';
import { allCustomersSchema } from '../../schemas/customer.schemas';

export const listCustomersService = async (): Promise<tAllCustomers> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  const customersFound = await customerRepos.find();

  return allCustomersSchema.parse(customersFound);
};