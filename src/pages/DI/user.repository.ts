import { injectable } from 'inversify';
import { IRepository } from './IRepository.interface';
import { User } from './user.type';
import { DataStoreResponseConcrete1 } from './DataStoreResponseConcrete1.interface';
import { Parsers } from './user.parser';

@injectable()
export class UserRepository implements IRepository<User> {
  async get(id: string): Promise<User | null> {
    try {
      const response = await fetch(`https://randomuser.me/api?id=${id}`);
      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json();
      const data = json as {
        results: DataStoreResponseConcrete1[];
      };
      const user = Parsers.randomUser(data);

      return user;
    } catch (e) {
      throw Error(`Error in UserRepository calling get with id ${id}: ${e}`);
    }
  }
}
