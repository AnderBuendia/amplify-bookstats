import { Field } from 'formik';
import { getColorStatus } from 'lib/utils/colorStatus.utils';
import { BooksStatus } from 'enums/books/booksStatus';

const BookStatus = ({ setFieldValue, status }) => {
  return (
    <Field
      as="select"
      name="status"
      value={status}
      onChange={(e) => {
        setFieldValue('status', e.target.value);
      }}
      className={`${getColorStatus(
        status
      )} relative text-center mt-10 px-4 py-2 rounded-full font-bold cursor-pointer 
  shadow-md appearance-none hover:opacity-70`}
    >
      <option value={BooksStatus.TO_READ}>To Read</option>
      <option value={BooksStatus.READY_TO_START}>Ready To Start</option>
      <option value={BooksStatus.READING}>Reading</option>
      <option value={BooksStatus.COMPLETED}>Completed</option>
    </Field>
  );
};

export default BookStatus;
