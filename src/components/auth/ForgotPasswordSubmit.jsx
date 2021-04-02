import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from 'components/generic/FormikInput';
import ErrorForm from 'components/generic/ErrorForm';
import FormButton from 'components/generic/FormButton';

const ForgotPasswordSubmit = ({ forgotPasswordSubmit }) => {
  const errorMessagesForm = Yup.object().shape({
    authCode: Yup.string().required('A code is required'),
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
        Confirm new Password
      </p>
      <Formik
        initialValues={{
          authCode: '',
          password: '',
        }}
        validationSchema={errorMessagesForm}
        onSubmit={forgotPasswordSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormikInput
              name="authCode"
              type="text"
              id="authCode"
              labelName="Confirmation Code"
            />
            {touched.authCode && errors.authCode && (
              <ErrorForm errors={errors.authCode} />
            )}

            <FormikInput
              type="password"
              name="password"
              id="password"
              labelName="New Password"
            />
            {touched.password && errors.password && (
              <ErrorForm errors={errors.password} />
            )}

            <FormButton labelName="Submit New Password" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordSubmit;
