import { Router } from 'express';
import { createContactController, deleteContactController, getContactByUserController, listContactsByUserController, updateContactController } from '../controllers/contact.controllers';
import { ensureContactExist } from '../middlewares/ensureContactExist.middleware';
import { ensureUserExist } from '../middlewares/ensureUserExist.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { contactSchema, contactUpdateSchema } from '../schemas/contact.schemas';

export const contactsRoutes: Router = Router({ mergeParams: true });

contactsRoutes.post('', validateBody(contactSchema), ensureUserExist, createContactController);
contactsRoutes.get('', ensureUserExist, listContactsByUserController);
contactsRoutes.get('/:contactId', ensureUserExist, ensureContactExist, getContactByUserController);
contactsRoutes.patch('/:contactId', validateBody(contactUpdateSchema), ensureUserExist, ensureContactExist, updateContactController);
contactsRoutes.delete('/:contactId', ensureUserExist, ensureContactExist, deleteContactController);