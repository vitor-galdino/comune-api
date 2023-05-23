import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Customer } from '../entities/customer.entity';
import { AppError } from '../errors/AppError';

export const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);

  const isExist = await customerRepos.findOne({
    where: { email: req.body.email }
  });

  if (isExist) {
    throw new AppError('Email already exists', 409);
  }
  next();
}; 