import { useContext, useState, useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { checkAuthUser } from 'lib/utils/auth.utils';
import AppContext from 'lib/context/app/appContext';
import useResolution from 'hooks/useResolution';
import MainLayout from 'components/layouts/MainLayout';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import IconChevronDown from 'components/icons/iconchevrowndown';
import { MainPaths } from 'enums/paths/main-paths';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';

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
              <option>Filter by...</option>
              <option value="To Read">To Read</option>
              <option value="Ready To Start">Ready To Start</option>
              <option value="Reading">Reading</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <IconChevronDown />
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
          <Table books={books} user={user} />
        ) : (
          <Card books={books} user={user} />
        )}
      </div>
    </MainLayout>
  );
};

export default Books;
