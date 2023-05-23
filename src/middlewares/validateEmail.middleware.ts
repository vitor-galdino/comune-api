import { NextFunction, Request, Response } from 'express';
import { EntityTarget, Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { AppError } from '../errors/AppError';

export const validateEmail = (entity: any) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const customerRepos: Repository<any> = AppDataSource.getRepository(entity);

  const isExist = await customerRepos.findOne({
    where: { email: req.body.email }
  });

  if (isExist) {
    throw new AppError('Email already exists', 409);
  }
  next();
}; 