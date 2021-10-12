import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from '../reducers/auth';
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from 'redux-promise';

let middleware: any[] = [thunkMiddleware, ReduxPromise];

const rootReducer: any = combineReducers({loginReducer});

export const store = createStore(rootReducer, applyMiddleware(...middleware));