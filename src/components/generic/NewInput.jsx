import { Field } from 'formik';

const NewInput = ({ label, type }) => {
  return (
    <>
      <label htmlFor={label} className="text-sm capitalize">
        {label}
      </label>
      <Field
        className="outline-none border border-gray-300 rounded p-2 mt-2
          w-full focus:shadow-input focus:border-pink-400"
        id={label}
        name={label}
        type={type}
      />
    </>
  );
};

export default NewInput;
