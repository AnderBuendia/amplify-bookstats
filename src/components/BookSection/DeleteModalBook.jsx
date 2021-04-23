import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import toast from 'react-hot-toast';
import { deleteBook as deleteBookMutation } from 'graphql/mutations';
import { MainPaths } from 'enums/paths/main-paths';

const DeleteModalBook = ({ bookId, router, onClose }) => {
  async function deleteBook(id, router) {
    try {
      await API.graphql({
        query: deleteBookMutation,
        variables: {
          input: {
            id,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      await router.push(MainPaths.BOOKS);
      toast.success('Your book has been deleted');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="px-8 py-6 bg-white rounded-md shadow-lg border border-gray-300">
      <h1 className="font-bold text-center text-xl">Are you sure?</h1>
      <p className="font-bold text-center mb-4 text-xl">
        You want to delete this file?
      </p>
      <div className="flex flex-row justify-between items-center">
        <button
          className="py-2 px-4 rounded-3xl text-white bg-red-500 mr-3 hover:opacity-70"
          onClick={() => {
            deleteBook(bookId, router);
            onClose();
          }}
        >
          Yes, Delete it!
        </button>
        <button
          className="py-2 px-4 rounded-3xl text-white bg-black"
          onClick={onClose}
        >
          No, Cancel it!
        </button>
      </div>
    </div>
  );
};

export default DeleteModalBook;
