import { useContext } from 'react';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MainLayout from 'components/layouts/MainLayout';
import AuthContext from 'lib/context/auth/authContext';
import FormikInput from 'components/form/FormikInput';
import ErrorForm from 'components/form/ErrorForm';
import FormButton from 'components/form/FormButton';
import BookStatus from 'components/form/BookStatus';
import { MainPaths } from 'enums/paths/main-paths';
import { createBook } from '../../graphql/mutations';

const AddBook = () => {
  const { setIsLoading } = useContext(AuthContext);
  const router = useRouter();

  const errorMessagesForm = Yup.object().shape({
    name: Yup.string().required('Name of the book is required'),
    author: Yup.string().required('Author of the book is required'),
    pages: Yup.number().notOneOf(
      [0],
      'Pages are required and must be greater than 0'
    ),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    await API.graphql({
      query: createBook,
      variables: {
        input: values,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    router.push(MainPaths.BOOKS);
    setIsLoading(false);
  };

  return (
    <MainLayout
      title="Add Book"
      description="Add a new book to your list"
      url={MainPaths.ADD_BOOK}
    >
      <div className="w-11/12 lg:w-6/12 bg-white rounded-md p-6 mt-6">
        <h1 className="font-bold text-xl text-center">Add New Book</h1>
        <Formik
          initialValues={{
            name: '',
            author: '',
            pages: 0,
            status: 'To Read',
          }}
          validationSchema={errorMessagesForm}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form>
              <FormikInput name="name" id="name" type="text" />
              {touched.name && errors.name && (
                <ErrorForm errors={errors.name} />
              )}
              <FormikInput name="author" id="author" type="text" />
              {touched.author && errors.author && (
                <ErrorForm errors={errors.author} />
              )}

              <div className="flex flex-row justify-between items-center">
                <FormikInput name="pages" id="pages" type="number" />
                {touched.pages && errors.pages && (
                  <ErrorForm errors={errors.pages} />
                )}

                <BookStatus
                  setFieldValue={setFieldValue}
                  status={values.status}
                />
              </div>

              <FormButton labelName="Submit" />
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

export default AddBook;
