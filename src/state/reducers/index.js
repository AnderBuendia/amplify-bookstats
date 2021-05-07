import { combineReducers } from 'redux';
import appReducer from './appReducer';
import booksReducer from './booksReducer';

export default combineReducers({
  app: appReducer,
  books: booksReducer,
});
