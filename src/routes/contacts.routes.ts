import { Router } from 'express';
import { createContactController, deleteContactController, getContactByUserController, listContactsByUserController, updateContactController } from '../controllers/contact.controllers';
import { ensureContactExist } from '../middlewares/ensureContactExist.middleware';
import { ensureValidToken } from '../middlewares/ensureValidToken.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { contactSchema, contactUpdateSchema } from '../schemas/contact.schemas';

export const contactsRoutes: Router = Router({ mergeParams: true });

contactsRoutes.post('', validateBody(contactSchema), ensureValidToken, createContactController);
contactsRoutes.get('', ensureValidToken, listContactsByUserController);
contactsRoutes.get('/:contactId', ensureValidToken, ensureContactExist, getContactByUserController);
contactsRoutes.patch('/:contactId', validateBody(contactUpdateSchema), ensureValidToken, ensureContactExist, updateContactController);
contactsRoutes.delete('/:contactId', ensureValidToken, ensureContactExist, deleteContactController);