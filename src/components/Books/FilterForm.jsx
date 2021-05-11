import { useRouter } from 'next/router';
import { BooksStatus } from 'enums/books/books-status';
import { MainPaths } from 'enums/paths/main-paths';
import IconChevrons from 'components/icons/iconchevrons';

const FilterForm = ({ q, selectValue, handleQ, handleSelectValue }) => {
  const router = useRouter();

  return (
    <>
      <button
        className="w-7/12 p-3 mb-5 font-bold bg-green-500 text-white rounded-md hover:opacity-70 
    transition-opacity duration-500 ease-out"
        onClick={() => router.push(MainPaths.ADD_BOOK)}
      >
        Add New Book
      </button>

      <div className="w-full flex flex-row justify-between items-center mb-4">
        <div className="relative inline-block text-gray-700">
          <select
            onChange={(e) => handleSelectValue(e.target.value)}
            value={selectValue}
            name="status"
            className="h-10 pl-3 pr-6 placeholder-gray-600 border border-gray-600 
        cursor-pointer bg-white rounded-lg appearance-none focus:shadow-outline"
            placeholder="Regular input"
          >
            <option value="">Filter by...</option>
            <option value={BooksStatus.TO_READ}>To Read</option>
            <option value={BooksStatus.READY_TO_START}>Ready To Start</option>
            <option value={BooksStatus.READING}>Reading</option>
            <option value={BooksStatus.COMPLETED}>Completed</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <IconChevrons className="h-5 w-5 text-gray-200" />
          </div>
        </div>

        <input
          type="search"
          value={q}
          placeholder="Filter..."
          className="bg-white h-10 py-4 px-4 border-2 border-gray-700 placeholder-gray-700 rounded-lg text-sm focus:outline-none"
          onChange={(e) => handleQ(e.target.value)}
        />
      </div>
    </>
  );
};

export default FilterForm;
