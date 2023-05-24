import { Router } from 'express';
import { createContactController } from '../controllers/contact.controllers';
import { Contact } from '../entities/contact.entity';
import { ensureCustomerExist } from '../middlewares/ensureCustomerExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { contactSchema } from '../schemas/contact.schemas';

export const contactsRoutes: Router = Router({ mergeParams: true });

contactsRoutes.post('', validateBody(contactSchema), validateEmail(Contact), ensureCustomerExist, createContactController);