import { Router } from 'express';
import { createUserController, deleteUserController, getUserController, updateUserController } from '../controllers/user.controllers';
import { User } from '../entities/user.entity';
import { ensureValidToken } from '../middlewares/ensureValidToken.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { userSchema, userUpdateSchema } from '../schemas/user.schemas';

export const usersRoutes: Router = Router();

usersRoutes.post('', validateBody(userSchema), validateEmail(User), createUserController);
usersRoutes.get('', ensureValidToken, getUserController);
usersRoutes.patch('', ensureValidToken, validateBody(userUpdateSchema), validateEmail(User), updateUserController);
usersRoutes.delete('', ensureValidToken, deleteUserController);