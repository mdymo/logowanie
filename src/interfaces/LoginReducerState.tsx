import { User } from './User';


export interface LoginReducerState {
  loggedIn: boolean,
  user: User | null,
  errorLabel: string,
}