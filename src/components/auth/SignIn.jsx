import { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../../lib/context/auth/authContext';
import FormikInput from '../generic/FormikInput';
import ErrorForm from '../generic/ErrorForm';
import SocialSignIn from './SocialSignIn';
import Spinner from '../generic/Spinner';

const SignIn = ({ setUiState, signIn }) => {
  const { isLoading } = useContext(AuthContext);

  const errorMessagesForm = Yup.object().shape({
    email: Yup.string().email('Invalid Email.').required('Email is required'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_$!%*#?&])[A-Za-z\d@_$!%*#?&]{6,}$/,
        'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
  });

  return (
    <>
      <p className="text-3xl font-black text-center">Sign in to your account</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={errorMessagesForm}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form>
            <FormikInput id="email" name="email" type="text" />
            {touched.email && errors.email && (
              <ErrorForm errors={errors.email} />
            )}

            <FormikInput name="password" id="password" type="password" />
            {touched.password && errors.password && (
              <ErrorForm errors={errors.password} />
            )}

            <div className="mt-2">
              <span
                onClick={() => setUiState('forgotPassword')}
                className="underline text-sm text-pink-600 hover:text-pink-800 cursor-pointer"
              >
                Forgot your Password?
              </span>
            </div>

            <button
              className="flex flex-row items-center justify-center text-white w-full 
                mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
              type="submit"
            >
              {isLoading && <Spinner />} Sign in
            </button>

            <div className="my-5 border border-gray-300"></div>

            <SocialSignIn />

            <p className="mt-8 text-sm font-bold">
              Don't have an account?
              <span
                onClick={() => setUiState('signUp')}
                role="button"
                className="ml-2 cursor-pointer text-pink-600 hover:text-pink-800"
              >
                Sign Up
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
