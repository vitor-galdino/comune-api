import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { tAllUsers } from '../../interfaces/user.interfaces';
import { allUsersSchema } from '../../schemas/user.schemas';

export const listUsersService = async (): Promise<tAllUsers> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  const usersFound = await userRepos.find();

  return allUsersSchema.parse(usersFound);
};