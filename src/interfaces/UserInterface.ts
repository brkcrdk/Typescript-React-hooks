export interface UserTypes {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: number;
  };
  email: string;
  age: number;
}
