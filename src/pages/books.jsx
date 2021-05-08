// @ts-nocheck
import { useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import MainLayout from 'components/layouts/MainLayout';
import Books from 'components/Books/';
import { MainPaths } from 'enums/paths/main-paths';

const BooksPage = () => {
  const router = useRouter();
  const { getBooks, checkAuthUser } = useActions();

  useEffect(() => {
    checkAuthUser(router);
  }, []);

  useEffect(() => {
    if (!booksList || !booksList.length) fetchBooks();
  }, []);

  const { user, isLoading } = useSelector((state) => state.app);
  const { booksList, tokenId } = useSelector((state) => state.books);

  const fetchBooks = () => getBooks();

  if (!user) return null;

  return (
    <MainLayout
      title="My Books"
      description="Create a list of your favorite books"
      url={MainPaths.BOOKS}
    >
      <Books
        user={user}
        books={booksList}
        isLoading={isLoading}
        tokenId={tokenId}
      />
    </MainLayout>
  );
};

export default BooksPage;
