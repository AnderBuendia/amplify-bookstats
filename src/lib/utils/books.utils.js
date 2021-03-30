// @ts-nocheck
import { API, Auth } from 'aws-amplify';
import '../../../configureAmplify';
import { booksByUsername } from '../../../graphql/queries';

export async function fetchBooks(setBooks) {
  const { username } = await Auth.currentAuthenticatedUser();
  const bookData = await API.graphql({
    query: booksByUsername,
    variables: {
      username,
    },
  });

  setBooks(bookData.data.booksByUsername.items);
}
