import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';
import { AppError } from '../errors/AppError';

export const ensureUserExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);
  const id: number = parseInt(req.params.userId);

  const userFound = await userRepos.findOneBy({ id });

  if (!userFound) {
    throw new AppError('User not found', 404);
  }

  return next();
};