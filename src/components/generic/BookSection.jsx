import { Formik, Form, Field } from 'formik';
import RatingStars from 'components/generic/RatingStars';
import { getColorStatus } from 'lib/utils/colorStatus.utils';

const BookSection = ({ book }) => {
  return (
    <div className="container mx-auto mt-8 w-11/12 p-5 bg-white rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-lg ">{book.name}</h1>
        <h3 className="font-light text-gray-500">{book.author}</h3>
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
  );
};

export default BookSection;
