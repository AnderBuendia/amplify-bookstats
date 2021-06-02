import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from 'components/form/FormikInput';
import ErrorForm from 'components/form/ErrorForm';
import FormButton from 'components/form/FormButton';

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
              type="button"
              onClick={() => setUiState({ uiState: null })}
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
