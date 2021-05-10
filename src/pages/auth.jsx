import '../../configureAmplify';
import useUser from 'hooks/useUser';
import AuthLayout from 'components/layouts/AuthLayout';
import SignUp from 'components/auth/SignUp';
import ConfirmSignUp from 'components/auth/ConfirmSignUp';
import SignIn from 'components/auth/SignIn';
import ForgotPasswordSubmit from 'components/auth/ForgotPasswordSubmit';
import ForgotPassword from 'components/auth/ForgotPassword';
import { UiStateStatus } from 'enums/user/uistate-status';

const Auth = () => {
  const {
    user,
    uiState,
    setUiState,
    signIn,
    signUp,
    confirmSignUp,
    forgotPassword,
    forgotPasswordSubmit,
  } = useUser();

  return (
    <AuthLayout>
      {(() => {
        switch (uiState) {
          case UiStateStatus.SIGN_UP:
            return (
              <SignUp
                setUiState={setUiState}
                signUp={({ email, password }) => signUp({ email, password })}
              />
            );
          case UiStateStatus.CONFIRM_SIGN_UP:
            return (
              <ConfirmSignUp
                setUiState={setUiState}
                confirmSignUp={({ authCode }) => confirmSignUp(authCode, user)}
              />
            );
          case UiStateStatus.FORGOT_PASSWORD:
            return (
              <ForgotPassword
                setUiState={setUiState}
                forgotPassword={({ email }) => forgotPassword({ email })}
              />
            );
          case UiStateStatus.FORGOT_PASSWORD_SUBMIT:
            return (
              <ForgotPasswordSubmit
                forgotPasswordSubmit={({ authCode, password }) =>
                  forgotPasswordSubmit(authCode, password, user)
                }
              />
            );
          default:
            return (
              <SignIn
                setUiState={setUiState}
                signIn={({ email, password }) => signIn({ email, password })}
              />
            );
        }
      })()}
    </AuthLayout>
  );
};

export default Auth;
