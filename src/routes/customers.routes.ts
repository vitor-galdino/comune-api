import { Router } from 'express';
import { createCustomerController, getCustomerController, listCustomersController, updateCustomerController } from '../controllers/customer.controllers';
import { Customer } from '../entities/customer.entity';
import { ensureCustomerExist } from '../middlewares/ensureCustomerExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { customerSchema, customerUpdateSchema } from '../schemas/customer.schemas';

export const customersRoutes: Router = Router();

customersRoutes.post('', validateBody(customerSchema), validateEmail(Customer), createCustomerController);
customersRoutes.get('', listCustomersController);
customersRoutes.get('/:customerId', ensureCustomerExist, getCustomerController);
customersRoutes.patch('/:customerId', validateBody(customerUpdateSchema), ensureCustomerExist, validateEmail(Customer), updateCustomerController);