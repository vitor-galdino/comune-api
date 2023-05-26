import { Router } from 'express';
import { createUserController, deleteUserController, getUserController, listUsersController, updateUserController } from '../controllers/user.controllers';
import { User } from '../entities/user.entity';
import { ensureUserExist } from '../middlewares/ensureUserExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { userSchema, userUpdateSchema } from '../schemas/user.schemas';

export const usersRoutes: Router = Router();

usersRoutes.post('', validateBody(userSchema), validateEmail(User), createUserController);
usersRoutes.get('', listUsersController);
usersRoutes.get('/:userId', ensureUserExist, getUserController);
usersRoutes.patch('/:userId', validateBody(userUpdateSchema), ensureUserExist, validateEmail(User), updateUserController);
usersRoutes.delete('/:userId', ensureUserExist, deleteUserController);