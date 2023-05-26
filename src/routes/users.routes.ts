import { Router } from 'express';
import { createUserController, deleteUserController, getUserController, listUsersController, updateUserController } from '../controllers/user.controllers';
import { Customer } from '../entities/user.entity';
import { ensureUserExist } from '../middlewares/ensureUserExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { customerSchema, customerUpdateSchema } from '../schemas/user.schemas';

export const customersRoutes: Router = Router();

customersRoutes.post('', validateBody(customerSchema), validateEmail(Customer), createUserController);
customersRoutes.get('', listUsersController);
customersRoutes.get('/:userId', ensureUserExist, getUserController);
customersRoutes.patch('/:userId', validateBody(customerUpdateSchema), ensureUserExist, validateEmail(Customer), updateUserController);
customersRoutes.delete('/:userId', ensureUserExist, deleteUserController);