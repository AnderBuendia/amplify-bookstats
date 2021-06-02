import { ActionType } from '../action-types';
import { UiStateStatus } from 'enums/user/uistate-status';

export const signOutAction = () => (dispatch) =>
  dispatch({ type: ActionType.LOGOUT });

export const setUiStateAction =
  ({ uiState }) =>
  (dispatch) => {
    console.log(uiState);
    dispatch({
      type: ActionType.SET_UI_STATE,
      payload: uiState,
    });
  };

export const defaultAppStateAction = () => (dispatch) =>
  dispatch({ type: ActionType.RESET_APP_STATE });

export const isLoadingAction = () => (dispatch) =>
  dispatch({ type: ActionType.IS_LOADING });

export const checkAuthUserAction = (user) => (dispatch) => {
  dispatch({
    type: ActionType.AUTH_USER_SUCCESS,
    payload: {
      user,
      uiState: UiStateStatus.SIGNED_IN,
    },
  });
};

export const checkAuthUserErrorAction = () => (dispatch) =>
  dispatch({ type: ActionType.CHECK_AUTH_USER_ERROR });

export const signInAction = (data) => (dispatch) =>
  dispatch({
    type: ActionType.SIGN_IN_SUCCESS,
    payload: {
      user: data,
      uiState: UiStateStatus.SIGNED_IN,
    },
  });

export const signUpAction = (user) => (dispatch) =>
  dispatch({
    type: ActionType.SIGN_UP_SUCCESS,
    payload: {
      email: user.username,
      uiState: UiStateStatus.CONFIRM_SIGN_UP,
    },
  });

export const forgotPasswordAction = (email) => (dispatch) =>
  dispatch({
    type: ActionType.FORGOT_PASSWORD_SUCCESS,
    payload: {
      email,
      uiState: UiStateStatus.FORGOT_PASSWORD_SUBMIT,
    },
  });

export const authErrorAction = () => (dispatch) =>
  dispatch({ type: ActionType.AUTH_ERROR });
