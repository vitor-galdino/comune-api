import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/user.entity';
import { tUser, tUserResponse } from '../../interfaces/user.interfaces';
import { customerResponseSchema } from '../../schemas/user.schemas';

export const createUserService = async (payload: tUser): Promise<tUserResponse> => {
  const userRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  const newCustomer = userRepos.create(payload);
  await userRepos.save(newCustomer);

  return customerResponseSchema.parse(newCustomer);
};