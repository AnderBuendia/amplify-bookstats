import { useContext } from 'react';
import AuthContext from 'lib/context/auth/authContext';
import Spinner from '../generic/Spinner';

const FormButton = ({ labelName }) => {
  const { isLoading } = useContext(AuthContext);
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
