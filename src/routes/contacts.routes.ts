import { Router } from 'express';
import { createContactController, deleteContactController, getContactByUserController, listContactsByUserController, updateContactController } from '../controllers/contact.controllers';
import { Contact } from '../entities/contact.entity';
import { ensureContactExist } from '../middlewares/ensureContactExist.middleware';
import { ensureUserExist } from '../middlewares/ensureUserExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { validateEmail } from '../middlewares/validateEmail.middleware';
import { contactSchema, contactUpdateSchema } from '../schemas/contact.schemas';

export const contactsRoutes: Router = Router({ mergeParams: true });

contactsRoutes.post('', validateBody(contactSchema), validateEmail(Contact), ensureUserExist, createContactController);
contactsRoutes.get('', ensureUserExist, listContactsByUserController);
contactsRoutes.get('/:contactId', ensureUserExist, ensureContactExist, getContactByUserController);
contactsRoutes.patch('/:contactId', validateBody(contactUpdateSchema), ensureUserExist, validateEmail(Contact), ensureContactExist, updateContactController);
contactsRoutes.delete('/:contactId', ensureUserExist, ensureContactExist, deleteContactController);