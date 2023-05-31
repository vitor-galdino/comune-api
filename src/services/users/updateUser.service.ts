import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { tUserResponse, tUserUpdate } from '../../interfaces/user.interfaces';
import { userResponseSchema } from '../../schemas/user.schemas';

export const updateUserService = async (id: number, payload: tUserUpdate): Promise<tUserResponse> => {

  if (!Object.keys(payload).length) {
    throw new AppError('Request body cannot be empty. Please provide a valid JSON object in the request body.');
  }

  if (payload.password) {
    payload.password = await hash(payload.password, 10);
  }

  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  await userRepos.update(id, payload);
  const userUpdated = await userRepos.findOneBy({ id });

  return userResponseSchema.parse(userUpdated);
};