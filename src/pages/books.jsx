import { useEffect } from 'react';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import { checkAuthUser } from 'lib/utils/auth.utils';
// import { fetchBooks } from 'lib/utils/books.utils';
import MainLayout from 'components/layouts/MainLayout';
import Books from 'components/Books/';
import { MainPaths } from 'enums/paths/main-paths';

const BooksPage = () => {
  const router = useRouter();
  const { setUser, getBooks } = useActions();

  useEffect(() => {
    checkAuthUser(setUser, router);
  }, []);

  useEffect(() => {
    if (!books.length) fetchBooks();
  }, []);

  // @ts-ignore
  const { user, books, tokenId, isLoading } = useSelector((state) => state.app);

  const fetchBooks = () => getBooks();

  console.log(tokenId);

  if (!user) return null;

  return (
    <MainLayout
      title="My Books"
      description="Create a list of your favorite books"
      url={MainPaths.BOOKS}
    >
      {isLoading && <div>Loading...</div>}
      <Books user={user} books={books} />
    </MainLayout>
  );
};

export default BooksPage;
