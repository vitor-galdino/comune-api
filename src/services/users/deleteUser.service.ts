import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/user.entity';

export const deleteUserService = async (id: number): Promise<void> => {
  const userRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const userFound = await userRepos.findOneBy({ id });
  await userRepos.remove(userFound!);
};