import { API } from 'aws-amplify';
import '../../../configureAmplify';
import MainLayout from 'components/layouts/MainLayout';
import { getBook, listBooks } from 'graphql/queries';
import { MainPaths } from 'enums/paths/main-paths';
import BookSection from 'components/book/BookSection';

const Book = ({ bookData }) => {
  return (
    <MainLayout
      title={bookData.name}
      description="See more data of your favorite books"
      url={`${MainPaths.BOOKS}/${bookData.id}`}
    >
      <BookSection book={bookData} />
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
      bookData: bookData.data.getBook,
    },
    revalidate: 60,
  };
}

export default Book;
