import { combineReducers } from 'redux';
import appReducer from './appReducer';
import booksReducer from './booksReducer';

const combinedReducers = combineReducers({
  app: appReducer,
  books: booksReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
