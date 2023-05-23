import { Router } from 'express';
import { createCustomerController, listCustomersController } from '../controllers/customer.controllers';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { customerSchema } from '../schemas/customer.schemas';

export const customersRoutes: Router = Router();

customersRoutes.post('', validateBody(customerSchema), validateEmail, createCustomerController);
customersRoutes.get('', listCustomersController);