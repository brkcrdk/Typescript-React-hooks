import { string } from "prop-types";

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
  };
  login: {
    username: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
  };
}
