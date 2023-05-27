import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

export const ensureValidToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  const authToken = req.headers.authorization;

  if (!authToken || authToken?.length === 6) {
    throw new AppError('Missing bearer token', 401);
  }

  const token: string = authToken.split(' ')[1];

  verify(token, process.env.SECRET_KEY!, (err, decoded: any) => {
    if (err) {
      throw new AppError(err.message, 401);
    }

    console.log(decoded.id);
    res.locals.userId = decoded.id;
  });

  return next();
};