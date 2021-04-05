import '../../../configureAmplify';
import Link from 'next/link';
import RatingStars from 'components/generic/RatingStars';
import { getColorStatus } from 'lib/utils/colorStatus.utils';
import { MainPaths } from 'enums/paths/main-paths';

const Card = ({ books, user }) => {
  return books.map((book) => (
    <Link key={book.id} href={user ? `${MainPaths.BOOKS}/${book.id}` : ''}>
      <div
        className="w-full mb-3 p-4 bg-white border shadow-lg rounded-lg cursor-pointer
      transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-md hover:opacity-75"
      >
        <div className="flex flex-row justify-between items-center">
          <p className="text-md text-left">{book.name}</p>
          <p className="text-sm text-left">{book.author}</p>
        </div>

        <div className="mt-4 flex flex-row justify-between items-center">
          <p
            className={`${getColorStatus(
              book.status
            )} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
          >
            {book.status}
          </p>
          <RatingStars bookId={book.id} bookRating={book.rating} />
        </div>
      </div>
    </Link>
  ));
};

export default Card;
