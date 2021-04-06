import RatingStars from 'components/generic/RatingStars';
import FormEditBook from 'components/book/FormEditBook';
import { validateYupSchema } from 'formik';

const BookSection = ({ book }) => {
  const {
    id,
    name,
    author,
    rating,
    pages,
    status,
    read_pages,
    createdAt,
    updatedAt,
  } = book;
  const createdDate = new Date(createdAt);
  const completedDate = new Date(updatedAt);

  return (
    <div className="flex flex-col">
      <div className="container mx-auto mt-8 w-11/12 p-5 bg-white rounded-md shadow-md">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-lg ">{name}</h1>
          <h3 className="font-light text-gray-500">{author}</h3>
        </div>
        <div className="my-4 flex flex-row justify-between items-center">
          <p>
            Pages: <span className="font-light text-gray-500">{pages}</span>
          </p>
          <RatingStars bookId={id} bookRating={rating} />
        </div>
        <div className="w-full flex flex-row justify-between items-center text-center rounded-md border p-2">
          <div className="w-1/3 flex flex-col">
            <p>Time left</p>
            <p className="text-gray-500 font-light">
              {read_pages ? read_pages : Math.round(pages * 1.15)} mins
            </p>
          </div>
          <div className="w-1/3 flex flex-col border-r border-l">
            <p>Start at</p>
            <p className="text-gray-500 font-light">
              {status === 'Reading' ? createdDate.toDateString() : 'Not Yet'}
            </p>
          </div>
          <div className="w-1/3 flex flex-col ">
            <p>Completed at</p>
            <p className="text-gray-500 font-light">
              {status === 'Completed'
                ? completedDate.toDateString()
                : 'Not Yet'}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 w-11/12 p-5 bg-white rounded-md shadow-md">
        <FormEditBook book={book} />
      </div>
    </div>
  );
};

export default BookSection;
