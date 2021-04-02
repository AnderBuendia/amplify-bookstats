import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from 'components/generic/FormikInput';
import ErrorForm from 'components/generic/ErrorForm';
import FormButton from 'components/generic/FormButton';

const SignUp = ({ setUiState, signUp }) => {
  const errorMessagesForm = Yup.object().shape({
    name: Yup.string().required('User name is required'),
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
        Sign up for an account
      </p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={errorMessagesForm}
        onSubmit={signUp}
      >
        {({ errors, touched }) => (
          <Form>
            <FormikInput name="name" id="name" type="text" />
            {touched.name && errors.name && <ErrorForm errors={errors.name} />}

            <FormikInput name="email" id="email" type="text" />
            {touched.email && errors.email && (
              <ErrorForm errors={errors.email} />
            )}

            <FormikInput name="password" id="password" type="password" />
            {touched.password && errors.password && (
              <ErrorForm errors={errors.password} />
            )}

            <FormButton labelName="Sign Up" />

            <p className="mt-8 text-sm font-bold">
              Have an account?
              <span
                onClick={() => setUiState(null)}
                role="button"
                className="ml-2 cursor-pointer text-pink-600 hover:text-pink-800"
              >
                Sign In
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
