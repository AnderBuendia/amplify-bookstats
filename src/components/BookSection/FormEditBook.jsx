import { useEffect } from 'react';
import { API } from 'aws-amplify';
import '../../../configureAmplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Formik, Form } from 'formik';
import useBooks from 'hooks/useBooks';
import FormikInput from 'components/form/FormikInput';
import BookStatus from 'components/form/BookStatus';
import FormButton from 'components/form/FormButton';
import { updateBook } from 'graphql/mutations';
import toast from 'react-hot-toast';

const FormEditBook = ({ book }) => {
  const { id, name, author, status, review, read_pages } = book;
  const { setEditBook } = useBooks();

  useEffect(() => {
    updateDataBook();
  }, []);

  const updateDataBook = () => setEditBook(id);

  const handleSubmit = async (values) => {
    let readPagesArray = null;
    if (read_pages && values.read_pages !== 0) {
      readPagesArray = [...read_pages, values.read_pages];
    } else if (!read_pages && values.read_pages !== 0) {
      readPagesArray = values.read_pages;
    } else if (read_pages && values.read_pages === 0) {
      readPagesArray = read_pages;
    }

    const newValues = { id, ...values, read_pages: readPagesArray };

    try {
      await API.graphql({
        query: updateBook,
        variables: {
          input: newValues,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      toast.success('Your book has been updated');
    } catch (error) {
      toast.error(error.message);
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
        {({ values, setFieldValue }) => (
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
            <p className="mt-1">
              Read Pages:
              <span className="ml-2 text-gray-500 font-light">
                {read_pages ? read_pages.join(', ') : 0}
              </span>
            </p>

            <FormikInput id="review" name="review" as="textarea" />

            <FormButton labelName="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormEditBook;
