import { Formik, Form, Field } from 'formik';
import FormikInput from 'components/form/FormikInput';
import BookStatus from 'components/form/BookStatus';
import FormButton from 'components/form/FormButton';

const FormEditBook = ({ book }) => {
  console.log(book);
  const { name, author, status } = book;
  return (
    <>
      <p className="text-3xl pb-2 font-black text-center">Edit this book</p>
      <Formik
        initialValues={{
          name,
          author,
          read_pages: '',
          status,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
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
                  type="text"
                  labelName="Read Pages"
                />
              </div>

              <BookStatus
                setFieldValue={setFieldValue}
                status={values.status}
              />
            </div>

            <FormButton labelName="Submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormEditBook;

{
  /* <p
className={`${getColorStatus(
  book.status
)} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
>
{book.status}
</p> */
}
