// @ts-nocheck
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import toast from 'react-hot-toast';
import { useActions } from 'hooks/useActions';
import { createBook, deleteBook } from 'graphql/mutations';
import { onUpdateBookId } from 'graphql/subscriptions';
import { MainPaths } from 'enums/paths/main-paths';

export default function useBooks() {
  const router = useRouter();
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
    ({ id }) => {
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

  const setDeleteBook = useCallback(async ({ id }) => {
    try {
      await API.graphql({
        query: deleteBook,
        variables: {
          input: {
            id,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      router.push(MainPaths.BOOKS);
      toast.success('Your book has been deleted');
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return {
    setAddBook,
    setEditBook,
    setDeleteBook,
  };
}
