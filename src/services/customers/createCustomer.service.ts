import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { tCustomer, tCustomerResponse } from '../../interfaces/customer.interfaces';
import { customerResponseSchema } from '../../schemas/customer.schemas';

export const createCustomerService = async (payload: tCustomer): Promise<tCustomerResponse> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  const newCustomer = customerRepos.create(payload);
  await customerRepos.save(newCustomer);

  return customerResponseSchema.parse(newCustomer);
};