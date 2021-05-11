// @ts-nocheck
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API } from 'aws-amplify';
import { useActions } from 'hooks/useActions';
import { booksByUsername } from 'graphql/queries';

export default function useUserBooks({ user = null }) {
  const { getBooksAction, getMoreBooksAction } = useActions();
  const { booksList, tokenId } = useSelector((state) => state.books);

  useEffect(() => {
    if (user) getBooks(user);
  }, []);

  async function getBooks(user) {
    try {
      const res = await API.graphql({
        query: booksByUsername,
        variables: {
          username: user,
          sortDirection: 'DESC',
          limit: 2,
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
            limit: 2,
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
