const DeleteModalBook = ({ bookId, onClose, setDeleteBook }) => (
  <div className="px-8 py-6 bg-white rounded-md shadow-lg border border-gray-300">
    <h1 className="font-bold text-center text-xl">Are you sure?</h1>
    <p className="font-bold text-center mb-4 text-xl">
      You want to delete this file?
    </p>
    <div className="flex flex-row justify-between items-center">
      <button
        className="py-2 px-4 rounded-3xl text-white bg-red-500 mr-3 hover:opacity-70"
        onClick={() => {
          setDeleteBook({ id: bookId });
          onClose();
        }}
      >
        Yes, Delete it!
      </button>
      <button
        className="py-2 px-4 rounded-3xl text-white bg-black"
        onClick={onClose}
      >
        No, Cancel it!
      </button>
    </div>
  </div>
);

export default DeleteModalBook;
