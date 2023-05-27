import { Request, Response } from 'express';
import { handleLoginService } from '../services/login/handleLogin.service';

export const handleLoginController = async (req: Request, res: Response): Promise<Response> => {
  const token = await handleLoginService(req.body);
  return res.json({ token });
};