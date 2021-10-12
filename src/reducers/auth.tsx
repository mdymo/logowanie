import { LoginReducerState } from '../interfaces/LoginReducerState';
import { changeRegisterMessage, changeLoginMessage } from '../utils';

const initialState: LoginReducerState = {
  loggedIn: false,
  user: null,
  errorLabel: '',
};



export const loginReducer = (state: LoginReducerState = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case 'LOGIN-ERROR':
      return {
        ...state,
        errorLabel: changeLoginMessage(action.payload),
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
        errorLabel: '',
      };
    case 'REGISTER-ERROR':
      return {
        ...state,
        errorLabel: changeRegisterMessage(action.payload.code),
      };
    default:
      return state;
  }
};