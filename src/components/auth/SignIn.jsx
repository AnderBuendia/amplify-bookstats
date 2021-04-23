import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from 'components/form/FormikInput';
import ErrorForm from 'components/form/ErrorForm';
import SocialSignIn from 'components/auth/SocialSignIn';
import FormButton from 'components/form/FormButton';

const SignIn = ({ setUiState, signIn }) => {
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
      <p className="text-3xl pb-2 font-black text-center">
        Sign in to your account
      </p>
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

            <FormButton labelName="Sign In" />

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
