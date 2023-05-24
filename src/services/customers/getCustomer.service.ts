import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { tCustomerResponse } from '../../interfaces/customer.interfaces';
import { customerResponseSchema } from '../../schemas/customer.schemas';

export const getCustomerService = async (id: number): Promise<tCustomerResponse> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const customerFound = await customerRepos.findOneBy({ id });  

  return customerResponseSchema.parse(customerFound);
};