import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from '../reducers/auth';
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from 'redux-promise';

let middleware = [thunkMiddleware, ReduxPromise];

const rootReducer = combineReducers({loginReducer});

export const store = createStore(rootReducer, applyMiddleware(...middleware));