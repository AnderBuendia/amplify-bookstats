import { useState, useContext } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import AuthContext from '../lib/context/auth/authContext';
import AuthLayout from '../components/layouts/AuthLayout';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';
import SignIn from '../components/auth/SignIn';
import ForgotPasswordSubmit from '../components/auth/ForgotPasswordSubmit';
import ForgotPassword from '../components/auth/ForgotPassword';
import {
  signUp,
  confirmSignUp,
  signIn,
  forgotPassword,
  forgotPasswordSubmit,
} from '../lib/utils/auth.utils';

const initialState = {
  email: '',
  password: '',
  authCode: '',
};

const Auth = () => {
  const { user, setUser, uiState, setUiState, setIsLoading } = useContext(
    AuthContext
  );
  const [formState, setFormState] = useState(initialState);
  const { email, password, authCode } = formState;
  const router = useRouter();

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);

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
          onChange={onChange}
          setUiState={setUiState}
          forgotPassword={() => forgotPassword(email, setUiState)}
        />
      )}
      {uiState === 'forgotPasswordSubmit' && (
        <ForgotPasswordSubmit
          onChange={onChange}
          forgotPasswordSubmit={() =>
            forgotPasswordSubmit(email, authCode, password, setUiState, router)
          }
        />
      )}
    </AuthLayout>
  );
};

export default Auth;
