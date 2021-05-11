import { useState } from 'react';
import useResolution from 'hooks/useResolution';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import FilterForm from 'components/Books/FilterForm';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';

const Books = ({ user, books, isLoading, tokenId, getMoreBooks }) => {
  const width = useResolution();
  const [q, setQ] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const searchBooks = (books) => {
    const columns = ['name', 'author'];

    let filterbooks = books.filter((book) =>
      columns.some(
        (column) => book[column].toString().toLowerCase().indexOf(q) > -1
      )
    );

    if (selectValue) {
      return filterbooks.filter((book) => book.status === selectValue);
    }

    return filterbooks;
  };

  let filterBooks = books ? searchBooks(books) : null;

  return (
    <div className="w-11/12 lg:w-9/12 flex flex-col items-center mt-6">
      <FilterForm
        q={q}
        selectValue={selectValue}
        handleQ={setQ}
        handleSelectValue={setSelectValue}
      />

      {isLoading && <p className="text-xl">Loading...</p>}

      {width > ResolutionBreakPoints.SM ? (
        <Table books={filterBooks} user={user} />
      ) : (
        <Card books={filterBooks} user={user} />
      )}

      {tokenId && (
        <button
          className="w-4/12 p-1 mt-2 font-bold bg-indigo-300 shadow-md border border-indigo-500 text-indigo-800 
          rounded-sm hover:opacity-70 transition-opacity duration-500 ease-out"
          onClick={() => getMoreBooks({ user, tokenId })}
        >
          Load More Books
        </button>
      )}
    </div>
  );
};

export default Books;
