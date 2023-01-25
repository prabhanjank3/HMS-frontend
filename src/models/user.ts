import AbstractDB from "./abstractDB";

export default interface User extends AbstractDB {
  name: string;
  email: string;
  phone: string;
}
