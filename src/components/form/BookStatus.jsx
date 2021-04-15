import { Field } from 'formik';
import { getColorStatus } from 'lib/utils/colorStatus.utils';

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
      <option value="To Read">To Read</option>
      <option value="Ready To Start">Ready To Start</option>
      <option value="Reading">Reading</option>
      <option value="Completed">Completed</option>
    </Field>
  );
};

export default BookStatus;
