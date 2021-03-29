import MainLayout from '../components/layouts/MainLayout';
import { MainPaths } from '../enums/paths/main-paths';
import Input from '../components/generic/Input';

const AddBook = () => {
  return (
    <MainLayout
      title="Add Book"
      description="Add a new book to your list"
      url={MainPaths.ADD_BOOK}
    >
      <div className="w-11/12 bg-white rounded-md p-6 mt-6">
        <h1 className="font-bold text-xl text-center">Add New Book</h1>
        <form className="mt-3">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <Input id="name" name="name" />
          <div className="mt-4">
            <label htmlFor="author" className="text-sm">
              Author
            </label>
            <Input id="author" name="author" />
          </div>
          <div className="mt-4">
            <label htmlFor="pages" className="text-sm">
              Pages
            </label>
            <Input type="number" id="pages" name="pages" />
          </div>

          <button
            className="text-white w-full mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddBook;
