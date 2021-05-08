import { ActionType } from '../action-types';
import { Auth } from 'aws-amplify';
import toast from 'react-hot-toast';
import { MainPaths } from 'enums/paths/main-paths';

export const setUiState = (uiState) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_UI_STATE,
      payload: uiState,
    });
  };
};

export const checkAuthUser = (router) => {
  return async (dispatch) => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      dispatch({
        type: ActionType.CHECK_AUTH_USER,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: ActionType.CHECK_AUTH_USER_ERROR,
      });
      router.push(MainPaths.AUTH);
    }
  };
};

export const signIn = (values, router) => {
  return async (dispatch) => {
    const { email, password } = values;
    dispatch({ type: ActionType.AUTH_IS_LOADING });

    try {
      await Auth.signIn(email, password);
      dispatch({
        type: ActionType.SIGN_IN_SUCCESS,
        payload: 'signedIn',
      });

      router.push(MainPaths.BOOKS);
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: ActionType.AUTH_ERROR });
    }
  };
};

export const signUp = (values) => {
  return async (dispatch) => {
    const { email, password } = values;

    dispatch({ type: ActionType.AUTH_IS_LOADING });

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });

      dispatch({
        type: ActionType.SIGN_UP_SUCCESS,
        payload: {
          email,
          uiState: 'confirmSignUp',
        },
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: ActionType.AUTH_ERROR });
    }
  };
};

export const confirmSignUp = (values, user) => {
  return async (dispatch) => {
    dispatch({ type: ActionType.AUTH_IS_LOADING });

    try {
      await Auth.confirmSignUp(user.email, values.authCode);

      dispatch({ type: ActionType.RESET_APP_STATE });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: ActionType.AUTH_ERROR });
    }
  };
};

export const forgotPassword = (values) => {
  return async (dispatch) => {
    try {
      const { email } = values;
      await Auth.forgotPassword(values.email);

      dispatch({
        type: ActionType.FORGOT_PASSWORD_SUCCESS,
        payload: {
          email,
          uiState: 'forgotPasswordSubmit',
        },
      });

      toast.success('Check your email to reset your password');
    } catch (error) {
      toast.error(error.message);
    }
  };
};

export const forgotPasswordSubmit = (values, user) => {
  return async (dispatch) => {
    const { password, authCode } = values;

    try {
      await Auth.forgotPasswordSubmit(user.email, authCode, password);

      dispatch({ type: ActionType.RESET_APP_STATE });
    } catch (error) {
      toast.error(error.message);
    }
  };
};

export const signOut = (router) => {
  return async (dispatch) => {
    try {
      await Auth.signOut();
      dispatch({ type: 'LOGOUT' });
      await router.push(MainPaths.INDEX);
      toast.success('You have been disconnected');
    } catch (error) {
      toast.error(error.message);
    }
  };
};
