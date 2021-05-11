// @ts-nocheck
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import '../../../configureAmplify';
import { useSelector } from 'react-redux';
import MainLayout from 'components/layouts/MainLayout';
import BookSection from 'components/BookSection';
import { getBook, listBooks } from 'graphql/queries';
import { MainPaths } from 'enums/paths/main-paths';

const Book = () => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const { book } = useSelector((state) => state.books);

  return (
    <MainLayout
      title={book.name}
      description="See more data of your favorite books"
      url={`${MainPaths.BOOKS}/${book.id}`}
    >
      <BookSection book={book} />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const bookData = await API.graphql({
    query: listBooks,
  });

  // @ts-ignore
  const paths = bookData.data.listBooks.items.map((book) => ({
    params: {
      id: book.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await API.graphql({
    query: getBook,
    variables: {
      id,
    },
  });

  return {
    props: {
      initialReduxState: {
        books: {
          booksList: [],
          book: res.data.getBook,
        },
      },
    },
  };
}

export default Book;
