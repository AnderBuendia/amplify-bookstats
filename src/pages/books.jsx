import { useContext, useState, useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { checkAuthUser } from 'lib/utils/auth.utils';
import AppContext from 'lib/context/app/appContext';
import useResolution from 'hooks/useResolution';
import MainLayout from 'components/layouts/MainLayout';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import IconChevrons from 'components/icons/iconchevrons';
import { MainPaths } from 'enums/paths/main-paths';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';
import { BooksStatus } from 'enums/books/booksStatus';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const { user, setUser } = useContext(AppContext);
  const router = useRouter();
  const width = useResolution();

  useEffect(() => {
    checkAuthUser(setUser, setBooks, router);
  }, []);

  if (!user) return null;

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

  let fetchBooks = books ? searchBooks(books) : null;

  return (
    <MainLayout
      title="My Books"
      description="Create a list of your favorite books"
      url={MainPaths.BOOKS}
    >
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

        {width > ResolutionBreakPoints.SM ? (
          <Table books={fetchBooks} user={user} />
        ) : (
          <Card books={fetchBooks} user={user} />
        )}
      </div>
    </MainLayout>
  );
};

export default Books;
