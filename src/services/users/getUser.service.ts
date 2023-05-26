import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { tUserResponse } from '../../interfaces/user.interfaces';
import { userResponseSchema } from '../../schemas/user.schemas';

export const getUserService = async (id: number): Promise<tUserResponse> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);
  const userFound = await userRepos.findOneBy({ id });

  return userResponseSchema.parse(userFound);
};