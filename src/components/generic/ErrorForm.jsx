const ErrorForm = ({ errors }) => {
  return (
    <div className="p-2 border-l-4 border-red-500 bg-red-300 text-gray-700 rounded-sm mt-1 mb-2">
      {errors}
    </div>
  );
};

export default ErrorForm;
