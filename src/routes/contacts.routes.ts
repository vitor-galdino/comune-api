import { Router } from 'express';
import { createContactController, getContactByCustomerController, listContactsByCustomerController } from '../controllers/contact.controllers';
import { Contact } from '../entities/contact.entity';
import { ensureContactExist } from '../middlewares/ensureContactExist.middleware';
import { ensureCustomerExist } from '../middlewares/ensureCustomerExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { contactSchema } from '../schemas/contact.schemas';

export const contactsRoutes: Router = Router({ mergeParams: true });

contactsRoutes.post('', validateBody(contactSchema), validateEmail(Contact), ensureCustomerExist, createContactController);
contactsRoutes.get('', ensureCustomerExist, listContactsByCustomerController);
contactsRoutes.get('/:contactId', ensureCustomerExist, ensureContactExist, getContactByCustomerController);