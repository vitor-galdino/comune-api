import { Request, Response } from 'express';
import { createUserService } from '../services/users/createUser.service';
import { deleteUserService } from '../services/users/deleteUser.service';
import { getUserService } from '../services/users/getUser.service';
import { updateUserService } from '../services/users/updateUser.service';

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const userData = await createUserService(req.body);
  return res.status(201).json(userData);
};

export const getUserController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.userId;
  const userData = await getUserService(id);
  return res.json(userData);
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.userId;
  const userData = await updateUserService(id, req.body);
  return res.json(userData);
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.userId;
  await deleteUserService(id);
  return res.status(204).send();
};