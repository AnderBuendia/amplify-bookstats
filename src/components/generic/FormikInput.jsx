import { Field } from 'formik';

const FormikInput = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="text-sm capitalize">
        {props.name}
      </label>
      <Field
        className="outline-none border border-gray-300 rounded p-2 mt-2
          w-full focus:shadow-input focus:border-pink-400"
        {...props}
      />
    </>
  );
};

export default FormikInput;
