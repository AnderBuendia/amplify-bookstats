import '../../configureAmplify';
import useUserBooks from 'hooks/useUserBooks';
import useUser from 'hooks/useUser';
import MainLayout from 'components/layouts/MainLayout';
import Books from 'components/Books';
import { MainPaths } from 'enums/paths/main-paths';

const BooksPage = () => {
  const { user, isLoading } = useUser();
  const { booksList, getMoreBooks, tokenId } = useUserBooks();

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
        getMoreBooks={getMoreBooks}
      />
    </MainLayout>
  );
};

export default BooksPage;
