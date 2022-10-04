import { IRepository } from './IRepository.interface';
import { User } from './user.type';

interface UserRepository extends IRepository<User> {
  get(id: string): Promise<User | null>;
}
