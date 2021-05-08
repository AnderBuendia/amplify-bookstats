import { useSelector } from 'react-redux';
import Spinner from '../generic/Spinner';

const FormButton = ({ labelName }) => {
  // @ts-ignore
  const { isLoading } = useSelector((state) => state.app);

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
