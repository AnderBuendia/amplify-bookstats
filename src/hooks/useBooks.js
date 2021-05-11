import { useCallback, useEffect } from 'react';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { useActions } from 'hooks/useActions';
import { createBook } from 'graphql/mutations';
import { onUpdateBookId } from 'graphql/subscriptions';

export default function useBooks() {
  const { setAddBookAction, setEditBookAction } = useActions();

  const setAddBook = useCallback(
    async (values) => {
      try {
        const res = await API.graphql({
          query: createBook,
          variables: {
            input: values,
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        setAddBookAction(res.data.createBook);
      } catch (error) {
        console.log(error);
      }
    },
    [setAddBookAction]
  );

  const setEditBook = useCallback(
    (id) => {
      try {
        API.graphql({
          query: onUpdateBookId,
          variables: {
            id,
          },
        }).subscribe({
          next: (data) => {
            setEditBookAction(data.value.data.onUpdateBookId);
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    [setEditBookAction]
  );

  return {
    setAddBook,
    setEditBook,
  };
}
