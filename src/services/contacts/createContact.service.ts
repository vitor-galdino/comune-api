import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { tContact } from '../../interfaces/contact.interfaces';
import { contactResponseSchema } from '../../schemas/contact.schemas';

export const createContactService = async (userId: number, payload: tContact): Promise<any> => {
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);
  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepos.findOneBy({ id: userId });

  if (user!.email == payload.email) {
    throw new AppError('Not possible to register the same email as the user.', 409);
  }

  const newContact = contactRepos.create({
    ...payload,
    user: user!
  });

  await contactRepos.save(newContact);
  return contactResponseSchema.parse(newContact);
};