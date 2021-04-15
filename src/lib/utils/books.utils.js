// @ts-nocheck
import { API, Auth } from 'aws-amplify';
import '../../../configureAmplify';
import { booksByUsername } from 'graphql/queries';

export async function fetchBooks(setBooks) {
  const { username } = await Auth.currentAuthenticatedUser();
  const bookData = await API.graphql({
    query: booksByUsername,
    variables: {
      username,
      sortDirection: 'DESC',
    },
  });

  setBooks(bookData.data.booksByUsername.items);
}

export function readPagesAvgMins(read_pages, pages) {
  if (!read_pages) {
    return Math.round(pages * 1.15);
  }

  const sumReadPages = read_pages.reduce((acc, el) => acc + el, 0);
  return Math.round((pages - sumReadPages) * 1.15);
}
