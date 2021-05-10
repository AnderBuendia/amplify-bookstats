import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { useActions } from 'hooks/useActions';
import { MainPaths } from 'enums/paths/main-paths';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { signOutAction } from 'state/action-creators';

export default function useUser() {
  const router = useRouter();
  const {
    setUiStateAction,
    isLoadingAction,
    defaultAppStateAction,
    checkAuthUserAction,
    checkAuthUserErrorAction,
    signInAction,
    signUpAction,
    forgotPasswordAction,
    authErrorAction,
  } = useActions();

  // @ts-ignore
  const { user, uiState, isLoading } = useSelector((state) => state.app);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => checkAuthUserAction(user))
      .catch(() => {
        checkAuthUserErrorAction();
        router.push(MainPaths.AUTH);
      });
  }, []);

  const setUiState = useCallback(() => {
    setUiStateAction({ uiState });
  }, [setUiStateAction]);

  const signIn = useCallback(
    ({ email, password }) => {
      isLoadingAction();

      Auth.signIn(email, password)
        .then((data) => {
          signInAction(data);
          router.push(MainPaths.BOOKS);
        })
        .catch((error) => {
          toast.error(error.message);
          authErrorAction();
        });
    },
    [isLoading, signInAction, authErrorAction]
  );

  const signUp = useCallback(
    ({ email, password }) => {
      isLoadingAction();

      Auth.signUp({
        username: email,
        password,
        attributes: { email },
      })
        .then((data) => {
          const { user } = data;
          signUpAction(user);
        })
        .catch((error) => {
          toast.error(error.message);
          authErrorAction();
        });
    },
    [isLoadingAction, signUpAction, authErrorAction]
  );

  const confirmSignUp = useCallback(
    (authCode, user) => {
      console.log({ authCode, user });
      isLoadingAction();

      Auth.confirmSignUp(user.email, authCode)
        .then(() => {
          defaultAppStateAction();
        })
        .catch((error) => {
          toast.error(error.message);
          authErrorAction();
        });
    },
    [isLoadingAction, defaultAppStateAction, authErrorAction]
  );

  const forgotPassword = useCallback(
    ({ email }) => {
      Auth.forgotPassword(email)
        .then(() => {
          forgotPasswordAction(email);
          toast.success('Check your email to reset your password');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [forgotPasswordAction]
  );

  const forgotPasswordSubmit = useCallback(
    (authCode, password, user) => {
      console.log({ authCode, password, user });
      Auth.forgotPasswordSubmit(user.email, authCode, password)
        .then(() => {
          defaultAppStateAction();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
    [defaultAppStateAction]
  );

  const signOut = useCallback(() => {
    Auth.signOut()
      .then(() => {
        signOutAction();
        router.push(MainPaths.INDEX);
        toast.success('You have been disconnected');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [signOutAction]);

  return {
    user,
    uiState,
    isLoading,
    setUiState,
    signIn,
    signUp,
    confirmSignUp,
    forgotPassword,
    forgotPasswordSubmit,
    signOut,
  };
}
