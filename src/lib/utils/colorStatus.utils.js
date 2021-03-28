import { BooksStatus } from '../../enums/books/booksStatus';

export const getColorStatus = (status) => {
  if (status === BooksStatus.TO_READ) return 'bg-blue-100 text-blue-500';
  if (status === BooksStatus.READING) return 'bg-red-100 text-red-500';
  if (status === BooksStatus.READY_TO_START)
    return 'bg-yellow-100 text-yellow-500';
  if (status === BooksStatus.COMPLETED) return 'bg-green-100 text-green-500';
};
