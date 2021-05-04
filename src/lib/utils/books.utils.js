import { Auth, API } from 'aws-amplify';
import '../../../configureAmplify';
import { BooksStatus } from 'enums/books/booksStatus';
import { booksByUsername } from 'graphql/queries';

export async function fetchBooks(setBooks, setTokenId, tokenId = null) {
  const user = await Auth.currentAuthenticatedUser();

  const bookData = await API.graphql({
    query: booksByUsername,
    variables: {
      username: user.username,
      sortDirection: 'DESC',
      limit: 2,
      nextToken: tokenId,
    },
  });

  // TODO Pass to JSON
  const res = bookData.data.booksByUsername;

  if (tokenId) {
    setTokenId(res.nextoken);
    return res.items.map((book) => {
      setBooks((prevBooks) => [...prevBooks, book]);
    });
  }

  setBooks(res.items);
  setTokenId(res.nextToken);
}

export function readPagesAvgMins(read_pages, pages, status) {
  if (status === BooksStatus.COMPLETED) {
    return '0';
  } else {
    if (!read_pages) {
      return Math.round(pages * 1.15);
    }

    const sumReadPages = read_pages.reduce((acc, el) => acc + el, 0);
    return Math.round((pages - sumReadPages) * 1.15);
  }
}
