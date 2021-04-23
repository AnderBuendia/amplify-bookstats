import { useContext } from 'react';
import AppContext from 'lib/context/app/appContext';
import Spinner from '../generic/Spinner';

const FormButton = ({ labelName }) => {
  const { isLoading } = useContext(AppContext);
  return (
    <button
      className="flex flex-row items-center justify-center text-white w-full 
      mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
      type="submit"
    >
      {isLoading && <Spinner />} {labelName}
    </button>
  );
};

export default FormButton;
