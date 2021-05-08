import { BooksStatus } from 'enums/books/booksStatus';

const ACTIONS_COLOR_STATUS = {
  [BooksStatus.TO_READ]: () => 'bg-blue-100 text-blue-500',
  [BooksStatus.READING]: () => 'bg-red-100 text-red-500',
  [BooksStatus.READY_TO_START]: () => 'bg-yellow-100 text-yellow-500',
  [BooksStatus.COMPLETED]: () => 'bg-green-100 text-green-500',
};

export const getColorStatus = (status) => {
  const actionColorStatus = ACTIONS_COLOR_STATUS[status];
  return actionColorStatus();
};
