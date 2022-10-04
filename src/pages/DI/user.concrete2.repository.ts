import { IRepository } from './IRepository.interface';
import { User } from './user.type';
import { DataStoreResponseConcrete2 } from './DataStoreResponseConcrete2.interface';
import { Parsers } from './user.parser';
import { injectable } from 'inversify';

@injectable()
export class UserRepository2 implements IRepository<User> {
  async get(id: string): Promise<User | null> {
    try {
      const response = await fetch(`https://random-data-api.com/api/users/random_user?id=${id}`);
      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json();
      const data = json as DataStoreResponseConcrete2;
      const user = Parsers.randomData(data);
      return user;
    } catch (e) {
      throw Error(`Error in UserRepository2 calling get with id ${id}: ${e}`);
    }
  }
}
