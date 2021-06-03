// @ts-nocheck
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API } from 'aws-amplify';
import { useActions } from 'hooks/useActions';
import { booksByUsername } from 'graphql/queries';
import useUser from 'hooks/useUser';

export default function useUserBooks() {
  const { getBooksAction, getMoreBooksAction } = useActions();
  const { booksList, tokenId } = useSelector((state) => state.books);
  const { user } = useUser();

  useEffect(() => {
    if (user) getBooks(user);
  }, []);

  async function getBooks(user) {
    try {
      const res = await API.graphql({
        query: booksByUsername,
        variables: {
          username: user.username,
          sortDirection: 'DESC',
          limit: 10,
        },
      });

      getBooksAction(res.data.booksByUsername);
    } catch (error) {
      console.log(error);
    }
  }

  const getMoreBooks = useCallback(
    async ({ user, tokenId }) => {
      try {
        const res = await API.graphql({
          query: booksByUsername,
          variables: {
            username: user.username,
            sortDirection: 'DESC',
            limit: 10,
            nextToken: tokenId,
          },
        });

        getMoreBooksAction(res.data.booksByUsername);
      } catch (error) {
        console.log(error);
      }
    },
    [getMoreBooksAction]
  );

  return {
    booksList,
    tokenId,
    getMoreBooks,
  };
}
