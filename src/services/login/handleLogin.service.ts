import { compare } from 'bcryptjs';
import 'dotenv/config';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { tLogin } from '../../interfaces/login.interfaces';

export const handleLoginService = async (payload: tLogin): Promise<string> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepos.findOneBy({ email: payload.email });
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const isValidPwd: boolean = await compare(payload.password, user.password);
  if (!isValidPwd) {
    throw new AppError('Invalid credentials', 401);
  }

  const token: string = sign(
    { id: user.id },
    process.env.SECRET_KEY!,
    { expiresIn: '24h' }
  );

  return token;
};