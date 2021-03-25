import { BooksStatus } from '../../enums/books/booksStatus';
import ReactStars from 'react-rating-stars-component';
import IconStar from '../icons/iconstar';

const Table = ({ books }) => {
  const getColorStatus = (status) => {
    if (status === BooksStatus.TO_READ) return 'bg-blue-100 text-blue-500';
    if (status === BooksStatus.READING) return 'bg-red-100 text-red-500';
    if (status === BooksStatus.READY_TO_START)
      return 'bg-yellow-100 text-yellow-500';
    if (status === BooksStatus.COMPLETED) return 'bg-green-100 text-green-500';
  };

  return (
    <div className="shadow overflow-x-auto border-b border-gray-200 rounded-lg">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Status</th>
            <th>Rating</th>
            <th className="relative  py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books &&
            books.map((book) => (
              <tr key={book.name}>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {book.name}
                    </div>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{book.author}</div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span
                    className={`${getColorStatus(
                      book.status
                    )} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="text-gray-500 whitespace-nowrap">
                  <ReactStars
                    classNames="focus:outline-none"
                    count={5}
                    value={book.rating}
                    activeColor="yellow"
                    emptyIcon={<IconStar className="w-5 h-5" />}
                    filledIcon={
                      <IconStar className="w-5 h-5 text-yellow-400" />
                    }
                  />
                </td>
                <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                  <span className="text-blue-500">Edit</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
