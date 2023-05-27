import { Router } from 'express';
import { handleLoginController } from '../controllers/login.controllers';
import { validateBody } from '../middlewares/validateBody.middleware';
import { loginSchema } from '../schemas/login.schemas';

export const loginRoutes: Router = Router();

loginRoutes.post('', validateBody(loginSchema), handleLoginController);