import { useContext, useState, useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { checkAuthUser } from 'lib/utils/auth.utils';
import AuthContext from 'lib/context/auth/authContext';
import useResolution from 'hooks/useResolution';
import MainLayout from 'components/layouts/MainLayout';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import { MainPaths } from 'enums/paths/main-paths';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';
import { fetchBooks } from 'lib/utils/books.utils';

const Books = () => {
  const [books, setBooks] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const width = useResolution();

  useEffect(() => {
    checkAuthUser(setUser, router);

    fetchBooks(setBooks);
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
        {width > ResolutionBreakPoints.SM ? (
          <Table books={books} />
        ) : (
          <Card books={books} />
        )}
      </div>
    </MainLayout>
  );
};

export default Books;
