import { getColorStatus } from 'lib/utils/colorStatus.utils';
import ReactStars from 'react-rating-stars-component';
import IconStar from 'components/icons/iconstar';

const Card = ({ books }) => {
  return books.map((book) => (
    <div
      key={book.name}
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
        <ReactStars
          classNames="focus:outline-none"
          count={5}
          value={book.rating}
          activeColor="yellow"
          emptyIcon={<IconStar className="w-5 h-5" />}
          filledIcon={<IconStar className="w-5 h-5 text-yellow-400" />}
        />
      </div>
    </div>
  ));
};

export default Card;
