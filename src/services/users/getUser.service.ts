import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { tUserAndContacts } from '../../interfaces/user.interfaces';
import { userAndContactsSchema } from '../../schemas/user.schemas';

export const getUserService = async (id: number): Promise<tUserAndContacts> => {
  const userRepos: Repository<User> = AppDataSource.getRepository(User);

  const result = await userRepos.createQueryBuilder('user')
    .leftJoinAndSelect('user.contacts', 'contacts')
    .where('user.id = :id', { id })
    .getOne();

  return userAndContactsSchema.parse(result);
};