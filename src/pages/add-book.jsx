import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MainLayout from '../components/layouts/MainLayout';
import { MainPaths } from '../enums/paths/main-paths';
import NewInput from '../components/generic/NewInput';
import ErrorForm from '../components/generic/ErrorForm';

const AddBook = () => {
  const errorMessagesForm = Yup.object().shape({
    name: Yup.string().required('Name of the book is required'),
    author: Yup.string().required('Author of the book is required'),
    pages: Yup.number().notOneOf(
      [0],
      'Pages are required and must be greater than 0'
    ),
  });

  return (
    <MainLayout
      title="Add Book"
      description="Add a new book to your list"
      url={MainPaths.ADD_BOOK}
    >
      <div className="w-11/12 bg-white rounded-md p-6 mt-6">
        <h1 className="font-bold text-xl text-center">Add New Book</h1>
        <Formik
          initialValues={{
            name: '',
            author: '',
            pages: 0,
          }}
          validationSchema={errorMessagesForm}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <NewInput label="name" type="text" />
              {touched.name && errors.name && (
                <ErrorForm errors={errors.name} />
              )}

              <NewInput label="author" type="text" />
              {touched.author && errors.author && (
                <ErrorForm errors={errors.author} />
              )}

              <NewInput label="pages" type="number" />
              {touched.pages && errors.pages && (
                <ErrorForm errors={errors.pages} />
              )}

              <button
                className="text-white w-full mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

export default AddBook;

{
  /* <form className="mt-3" onSubmit={onSubmitForm}>
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <NewInput id="name" name="name" />
          <div className="mt-4">
            <label htmlFor="author" className="text-sm">
              Author
            </label>
            <NewInput id="author" name="author" />
          </div>
          <div className="mt-4">
            <label htmlFor="pages" className="text-sm">
              Pages
            </label>
            <NewInput type="number" id="pages" name="pages" />
          </div>

          <button
            className="text-white w-full mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form> */
}
