import { API } from 'aws-amplify';
import '../../../configureAmplify';
import MainLayout from 'components/layouts/MainLayout';
import BookSection from 'components/generic/BookSection';
import { getBook, listBooks } from '../../../graphql/queries';
import { MainPaths } from 'enums/paths/main-paths';

const Book = ({ book }) => {
  console.log(book);
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
  console.log(params);
  const { id } = params;
  const bookData = await API.graphql({
    query: getBook,
    variables: {
      id,
    },
  });

  return {
    props: {
      // @ts-ignore
      book: bookData.data.getBook,
    },
    revalidate: 60,
  };
}

export default Book;
