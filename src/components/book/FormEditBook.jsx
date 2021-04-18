import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import '../../../configureAmplify';
import { Formik, Form } from 'formik';
import FormikInput from 'components/form/FormikInput';
import BookStatus from 'components/form/BookStatus';
import FormButton from 'components/form/FormButton';
import { updateBook } from 'graphql/mutations';
import { onUpdateBookId } from 'graphql/subscriptions';
import toast from 'react-hot-toast';

const FormEditBook = ({ book, setUpdatedBook, setIsLoading }) => {
  const { id, name, author, status, review, read_pages } = book;
  let readPagesArray = null;

  useEffect(() => {
    updateDataBook();
  }, []);

  function updateDataBook() {
    API.graphql({
      query: onUpdateBookId,
      variables: {
        id,
      },
      // @ts-ignore
    }).subscribe({
      next: (data) => {
        setUpdatedBook(data.value.data.onUpdateBookId);
        toast.success('Your book has been updated');
      },
    });
  }

  const handleSubmit = async (values) => {
    if (read_pages && values.read_pages !== 0) {
      readPagesArray = [...read_pages, values.read_pages];
    } else if (!read_pages && values.read_pages !== 0) {
      readPagesArray = values.read_pages;
    } else if (read_pages && values.read_pages === 0) {
      readPagesArray = read_pages;
    }

    const newValues = { id, ...values, read_pages: readPagesArray };

    try {
      setIsLoading(true);
      await API.graphql({
        query: updateBook,
        variables: {
          input: newValues,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto mb-3 p-6 bg-white rounded-md shadow-md">
      <p className="text-3xl pb-2 font-black text-center">Edit this book</p>
      <Formik
        initialValues={{
          name,
          author,
          read_pages: 0,
          status,
          review: review ? review : '',
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, values, touched, setFieldValue }) => (
          <Form>
            <FormikInput id="name" name="name" type="text" />
            <FormikInput id="author" name="author" type="text" />
            <div className="flex flex-row justify-between items-center">
              <div className="w-1/2">
                <FormikInput
                  id="read_pages"
                  name="read_pages"
                  type="number"
                  labelName="Read Pages"
                />
              </div>

              <BookStatus
                setFieldValue={setFieldValue}
                status={values.status}
              />
            </div>
            <FormikInput id="review" name="review" as="textarea" />

            <FormButton labelName="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormEditBook;
