import { ActionType } from '../action-types';

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
