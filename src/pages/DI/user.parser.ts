import { DataStoreResponseConcrete1 } from './DataStoreResponseConcrete1.interface';
import { User } from './user.type';
import { DataStoreResponseConcrete2 } from './DataStoreResponseConcrete2.interface';

const randomUserParser = (data: { results: DataStoreResponseConcrete1[] }): User => {
  return {
    name: {
      first: data.results[0].name.first,
      last: data.results[0].name.last,
    },
    dob: data.results[0].dob.date,
    gender: data.results[0].gender,
  };
};

const randomDataParser = (data: DataStoreResponseConcrete2): User => {
  return {
    name: {
      first: data.first_name,
      last: data.last_name,
    },
    dob: data.date_of_birth,
    gender: data.gender,
  };
};

export const Parsers = {
  randomUser: randomUserParser,
  randomData: randomDataParser,
};
