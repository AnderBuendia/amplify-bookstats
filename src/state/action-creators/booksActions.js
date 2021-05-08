import { Auth, API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { ActionType } from '../action-types';
import { booksByUsername } from 'graphql/queries';
import { createBook } from 'graphql/mutations';
import { onUpdateBookId } from 'graphql/subscriptions';

export const getBooks = () => {
  return async (dispatch) => {
    dispatch({ type: ActionType.BOOKS_IS_LOADING });

    try {
      const user = await Auth.currentAuthenticatedUser();

      const res = await API.graphql({
        query: booksByUsername,
        variables: {
          username: user.username,
          sortDirection: 'DESC',
          limit: 2,
        },
      });

      dispatch({
        type: ActionType.GET_BOOKS_SUCCESS,
        // @ts-ignore
        payload: res.data.booksByUsername,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setAddBook = (values) => {
  return async (dispatch) => {
    dispatch({ type: ActionType.BOOKS_IS_LOADING });

    try {
      const res = await API.graphql({
        query: createBook,
        variables: {
          input: values,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      dispatch({
        type: ActionType.SET_ADD_BOOK_SUCCESS,
        // @ts-ignore
        payload: res.data.createBook,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setEditBook = (id) => {
  return async (dispatch) => {
    dispatch({ type: ActionType.BOOKS_IS_LOADING });

    try {
      API.graphql({
        query: onUpdateBookId,
        variables: {
          id,
        },
        // @ts-ignore
      }).subscribe({
        next: (data) => {
          dispatch({
            type: ActionType.SET_EDIT_BOOK_SUCCESS,
            payload: data.value.data.onUpdateBookId,
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
