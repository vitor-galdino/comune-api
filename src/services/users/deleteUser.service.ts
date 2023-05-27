import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';

export const deleteUserService = async (id: number): Promise<void> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);
  const userFound = await userRepos.findOneBy({ id });
  await userRepos.remove(userFound!);
};