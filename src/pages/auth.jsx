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
import {
  signUp,
  confirmSignUp,
  signIn,
  forgotPassword,
  forgotPasswordSubmit,
} from 'lib/utils/auth.utils';

const Auth = () => {
  const router = useRouter();
  const { setUser, setUiState, setIsLoading } = useActions();

  // @ts-ignore
  const { user, uiState } = useSelector((state) => state.app);

  return (
    <AuthLayout>
      {!uiState && (
        <SignIn
          setUiState={setUiState}
          signIn={(values) => signIn(values, setUiState, setIsLoading, router)}
        />
      )}
      {uiState === 'signUp' && (
        <SignUp
          setUiState={setUiState}
          signUp={(values) => signUp(values, setIsLoading, setUiState, setUser)}
        />
      )}
      {uiState === 'confirmSignUp' && (
        <ConfirmSignUp
          setUiState={setUiState}
          confirmSignUp={(values) =>
            confirmSignUp(values, user, setUiState, setIsLoading)
          }
        />
      )}

      {uiState === 'forgotPassword' && (
        <ForgotPassword
          setUiState={setUiState}
          forgotPassword={(values) =>
            forgotPassword(values, setUiState, setUser)
          }
        />
      )}
      {uiState === 'forgotPasswordSubmit' && (
        <ForgotPasswordSubmit
          forgotPasswordSubmit={(values) =>
            forgotPasswordSubmit(values, setUiState, user, setUser)
          }
        />
      )}
    </AuthLayout>
  );
};

export default Auth;
