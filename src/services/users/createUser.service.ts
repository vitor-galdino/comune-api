import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { tUser, tUserResponse } from '../../interfaces/user.interfaces';
import { userResponseSchema } from '../../schemas/user.schemas';

export const createUserService = async (payload: tUser): Promise<tUserResponse> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  const newUser = userRepos.create(payload);
  await userRepos.save(newUser);

  return userResponseSchema.parse(newUser);
};