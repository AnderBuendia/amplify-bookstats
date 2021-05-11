import { combineReducers } from 'redux';
import appReducer from './appReducer';
import booksReducer from './booksReducer';
import { ActionType } from '../action-types';

const combinedReducers = combineReducers({
  app: appReducer,
  books: booksReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ActionType.LOGOUT) {
    state = undefined;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
