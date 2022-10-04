export interface DataStoreResponseConcrete1 {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  dob: {
    date: string;
    age: number;
  };
  id: string;
}
