import { Router } from 'express';
import { createCustomerController, getCustomerController, listCustomersController } from '../controllers/customer.controllers';
import { Customer } from '../entities/customer.entity';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { customerSchema } from '../schemas/customer.schemas';
import { ensureCustomerExist } from '../middlewares/ensureCustomerExist.middleware';

export const customersRoutes: Router = Router();

customersRoutes.post('', validateBody(customerSchema), validateEmail(Customer), createCustomerController);
customersRoutes.get('', listCustomersController);
customersRoutes.get('/:customerId', ensureCustomerExist, getCustomerController);