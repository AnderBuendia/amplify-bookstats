import '../../configureAmplify';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import { useRouter } from 'next/router';
import AuthLayout from 'components/layouts/AuthLayout';
import SignUp from 'components/auth/SignUp';
import ConfirmSignUp from 'components/auth/ConfirmSignUp';
import SignIn from 'components/auth/SignIn';
import ForgotPasswordSubmit from 'components/auth/ForgotPasswordSubmit';
import ForgotPassword from 'components/auth/ForgotPassword';

const Auth = () => {
  const router = useRouter();
  const {
    signIn,
    signUp,
    confirmSignUp,
    forgotPassword,
    forgotPasswordSubmit,
    setUiState,
  } = useActions();

  // @ts-ignore
  const { user, uiState } = useSelector((state) => state.app);

  return (
    <AuthLayout>
      {!uiState && (
        <SignIn
          setUiState={setUiState}
          signIn={(values) => signIn(values, router)}
        />
      )}
      {uiState === 'signUp' && (
        <SignUp setUiState={setUiState} signUp={(values) => signUp(values)} />
      )}
      {uiState === 'confirmSignUp' && (
        <ConfirmSignUp
          setUiState={setUiState}
          confirmSignUp={(values) => confirmSignUp(values, user)}
        />
      )}

      {uiState === 'forgotPassword' && (
        <ForgotPassword
          setUiState={setUiState}
          forgotPassword={(values) => forgotPassword(values)}
        />
      )}
      {uiState === 'forgotPasswordSubmit' && (
        <ForgotPasswordSubmit
          forgotPasswordSubmit={(values) => forgotPasswordSubmit(values, user)}
        />
      )}
    </AuthLayout>
  );
};

export default Auth;
