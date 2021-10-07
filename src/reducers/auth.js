import { changeRegisterMessage, changeLoginMessage } from '../utils';

const initialState = {
  loggedIn: false,
  user: null,
  newUser: null,
  errorLabel: '',
};



export const loginReducer = (state = initialState, action) => {
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
        newUser: action.payload,
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