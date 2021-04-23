import { useContext, useState, useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { checkAuthUser } from 'lib/utils/auth.utils';
import { fetchBooks } from 'lib/utils/books.utils';
import AppContext from 'lib/context/app/appContext';
import MainLayout from 'components/layouts/MainLayout';
import Books from 'components/Books/';
import { MainPaths } from 'enums/paths/main-paths';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [tokenId, setTokenId] = useState([]);
  const { user, setUser } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    checkAuthUser(setUser, router);

    fetchBooks(setBooks, setTokenId);
  }, []);

  if (!user) return null;

  console.log('Books', books);

  return (
    <MainLayout
      title="My Books"
      description="Create a list of your favorite books"
      url={MainPaths.BOOKS}
    >
      <Books
        user={user}
        books={books}
        tokenId={tokenId}
        setBooks={setBooks}
        setTokenId={setTokenId}
      />
    </MainLayout>
  );
};

export default BooksPage;
