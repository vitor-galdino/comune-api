import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { tUserResponse, tUserUpdate } from '../../interfaces/user.interfaces';
import { customerResponseSchema } from '../../schemas/user.schemas';

export const updateUserService = async (id: number, payload: tUserUpdate): Promise<tUserResponse> => {

  if (!Object.keys(payload).length) {
    throw new AppError('Request body cannot be empty. Please provide a valid JSON object in the request body.');
  }

  const userRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  await userRepos.update(id, payload);
  const customerUpdated = await userRepos.findOneBy({ id });

  return customerResponseSchema.parse(customerUpdated);
};