import { Router } from 'express';
import { createCustomerController } from '../controllers/customer.controllers';
import { validateBody } from '../middlewares/validateBody.middleware';
import { customerSchema } from '../schemas/customer.schemas';

export const customersRoutes: Router = Router();

customersRoutes.post('', validateBody(customerSchema), createCustomerController);