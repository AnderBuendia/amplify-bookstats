import { Auth, API } from 'aws-amplify';
import { ActionType } from '../action-types';
import { booksByUsername } from 'graphql/queries';

export const getBooks = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.GET_BOOKS,
      payload: true,
    });

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

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_USER,
      payload: user,
    });
  };
};

export const setUiState = (uiState) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_UI_STATE,
      payload: uiState,
    });
  };
};
export const setIsLoading = (isLoading) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_IS_LOADING,
      payload: isLoading,
    });
  };
};

export const setUpdatedBook = (updatedBook) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_UPDATED_BOOK,
      payload: updatedBook,
    });
  };
};
