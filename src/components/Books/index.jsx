import { useState } from 'react';
import { useRouter } from 'next/router';
import useResolution from 'hooks/useResolution';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import IconChevrons from 'components/icons/iconchevrons';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';
import { BooksStatus } from 'enums/books/books-status';
import { MainPaths } from 'enums/paths/main-paths';

const Books = ({ user, books, isLoading, tokenId, getMoreBooks }) => {
  const [q, setQ] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const router = useRouter();
  const width = useResolution();

  const searchBooks = (books) => {
    const columns = ['name', 'author'];

    let filterbooks = books.filter((book) =>
      columns.some(
        (column) => book[column].toString().toLowerCase().indexOf(q) > -1
      )
    );

    if (selectValue) {
      return filterbooks.filter((book) => book.status === selectValue);
    }

    return filterbooks;
  };

  let filterBooks = books ? searchBooks(books) : null;

  return (
    <div className="w-11/12 lg:w-9/12 flex flex-col items-center mt-6">
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
            onChange={(e) => setSelectValue(e.target.value)}
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
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {isLoading && <p className="text-xl">Loading...</p>}

      {width > ResolutionBreakPoints.SM ? (
        <Table books={filterBooks} user={user} />
      ) : (
        <Card books={filterBooks} user={user} />
      )}

      {tokenId && (
        <button
          className="w-4/12 p-1 mt-2 font-bold bg-indigo-300 shadow-md border border-indigo-500 text-indigo-800 
          rounded-sm hover:opacity-70 transition-opacity duration-500 ease-out"
          onClick={() => getMoreBooks(user, tokenId)}
        >
          Load More Books
        </button>
      )}
    </div>
  );
};

export default Books;
