import { useState, useContext } from 'react';
import AppContext from 'lib/context/app/appContext';
import { readPagesAvgMins } from 'lib/utils/books.utils';
import RatingStars from 'components/generic/RatingStars';
import FormEditBook from 'components/book/FormEditBook';

const BookSection = ({ book }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const { updatedBook, setIsLoading, setUpdatedBook } = useContext(AppContext);

  const dataBook = updatedBook ? updatedBook : book;

  const {
    id,
    name,
    author,
    rating,
    pages,
    status,
    review,
    read_pages,
    createdAt,
    updatedAt,
  } = dataBook;
  const createdDate = new Date(createdAt);
  const completedDate = new Date(updatedAt);

  return (
    <div className="flex flex-col w-11/12 justify-center items-center">
      <div className="container mx-auto mt-4 p-5 bg-white rounded-md shadow-md">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-lg ">{name}</h1>
          <h3 className="font-light text-gray-500">{author}</h3>
        </div>
        <div className="my-4 flex flex-row justify-between items-center">
          <p>
            Pages <span className="font-light text-gray-500">{pages}</span>
          </p>
          <RatingStars bookId={id} bookRating={rating} />
        </div>
        <div className="w-full flex flex-row justify-between items-center text-center rounded-md border p-2">
          <div className="w-1/3 flex flex-col">
            <p>Time left</p>
            <p className="text-gray-500 font-light">
              {readPagesAvgMins(read_pages, pages)} mins
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
        {review && (
          <div className="w-full mt-3">
            <p>Review</p>
            <div className="mt-1 p-2 bg-gray-200 rounded-md text-black">
              {review}
            </div>
          </div>
        )}
      </div>
      {openEdit ? (
        <FormEditBook
          book={dataBook}
          setUpdatedBook={setUpdatedBook}
          setIsLoading={setIsLoading}
        />
      ) : (
        <button
          className="object-center w-7/12 p-3 mt-5 font-bold bg-green-500 text-white rounded-md hover:opacity-70 
          transition-opacity duration-500 ease-out"
          onClick={() => setOpenEdit(true)}
        >
          Edit Book
        </button>
      )}
    </div>
  );
};

export default BookSection;
