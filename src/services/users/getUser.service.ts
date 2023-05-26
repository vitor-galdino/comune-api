import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/user.entity';
import { tUserResponse } from '../../interfaces/user.interfaces';
import { customerResponseSchema } from '../../schemas/user.schemas';

export const getUserService = async (id: number): Promise<tUserResponse> => {
  const userRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const userFound = await userRepos.findOneBy({ id });

  return customerResponseSchema.parse(userFound);
};