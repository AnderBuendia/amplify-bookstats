import Link from 'next/link';

const AuthLayout = ({ children }) => {
  // TODO: Put an image instead Home
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="p-8 border-b border-gray-300 text-center">
        <Link href="/">
          <a className="text-2xl font-bold">Home</a>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="shadow-md w-5/6 lg:w-2/6 bg-white p-12 shadow-form rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
