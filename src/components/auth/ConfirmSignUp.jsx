import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../generic/FormikInput';
import ErrorForm from '../generic/ErrorForm';
import FormButton from '../generic/FormButton';

const ConfirmSignUp = ({ setUiState, confirmSignUp }) => {
  const errorMessagesForm = Yup.object().shape({
    name: Yup.string().required('A code is required'),
  });

  return (
    <>
      <p className="text-3xl font-black">Confirm your account</p>
      <Formik
        initialValues={{
          authCode: '',
        }}
        validationSchema={errorMessagesForm}
        onSubmit={confirmSignUp}
      >
        {({ errors, touched }) => (
          <Form>
            <FormikInput
              name="authCode"
              id="authCode"
              type="text"
              labelName="Confirmation Code"
            />
            {touched.authCode && errors.authCode && (
              <ErrorForm errors={errors.authCode} />
            )}

            <FormButton labelName="Confirm Sign Up" />

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

export default ConfirmSignUp;
