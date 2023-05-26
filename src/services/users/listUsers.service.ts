import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/user.entity';
import { tAllUsers } from '../../interfaces/user.interfaces';
import { allCustomersSchema } from '../../schemas/user.schemas';

export const listUsersService = async (): Promise<tAllUsers> => {
  const userRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  const customersFound = await userRepos.find();

  return allCustomersSchema.parse(customersFound);
};