// @ts-nocheck
import { ActionType } from '../action-types';

export const getBooksAction = (books) => (dispatch) =>
  dispatch({
    type: ActionType.GET_BOOKS_SUCCESS,
    payload: books,
  });

export const getMoreBooksAction = (books) => (dispatch) =>
  dispatch({
    type: ActionType.GET_MORE_BOOKS_SUCCESS,
    payload: books,
  });

export const setAddBookAction = (newBook) => (dispatch) =>
  dispatch({
    type: ActionType.SET_ADD_BOOK_SUCCESS,
    payload: newBook,
  });

export const setEditBookAction = (editedBook) => (dispatch) =>
  dispatch({
    type: ActionType.SET_EDIT_BOOK_SUCCESS,
    payload: editedBook,
  });
