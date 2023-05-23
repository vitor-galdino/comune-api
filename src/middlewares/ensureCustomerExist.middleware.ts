import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Customer } from '../entities/customer.entity';
import { AppError } from '../errors/AppError';

export const ensureCustomerExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const id: number = parseInt(req.params.customerId);

  const customerFound = await customerRepos.findOneBy({ id });

  if (!customerFound) {
    throw new AppError('User not found', 404);
  }

  return next();
};