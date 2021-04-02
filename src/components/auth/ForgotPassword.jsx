import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from 'components/generic/FormikInput';
import ErrorForm from 'components/generic/ErrorForm';
import FormButton from 'components/generic/FormButton';

const ForgotPassword = ({ setUiState, forgotPassword }) => {
  const errorMessagesForm = Yup.object().shape({
    email: Yup.string().email('Invalid Email.').required('Email is required'),
  });

  return (
    <>
      <p className="text-3xl pb-2 font-black text-center">Forgot Password</p>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={errorMessagesForm}
        onSubmit={forgotPassword}
      >
        {({ errors, touched }) => (
          <Form>
            <FormikInput id="email" type="text" name="email" />
            {touched.email && errors.email && (
              <ErrorForm errors={errors.email} />
            )}

            <FormButton labelName="Reset Password" />

            <button
              onClick={() => setUiState(null)}
              className="text-sm mt-6 text-pink-500"
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;
