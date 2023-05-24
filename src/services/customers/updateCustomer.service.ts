import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { AppError } from '../../errors/AppError';
import { tCustomerResponse, tCustomerUpdate } from '../../interfaces/customer.interfaces';
import { customerResponseSchema } from '../../schemas/customer.schemas';

export const updateCustomerService = async (id: number, payload: tCustomerUpdate): Promise<tCustomerResponse> => {

  if (!Object.keys(payload).length) {
    throw new AppError('Request body cannot be empty. Please provide a valid JSON object in the request body.');
  }

  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  await customerRepos.update(id, payload);
  const customerUpdated = await customerRepos.findOneBy({ id });

  return customerResponseSchema.parse(customerUpdated);
};