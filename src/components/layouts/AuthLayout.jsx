import Link from 'next/link';
import IconBooks from 'components/icons/iconbooks';

const AuthLayout = ({ children }) => {
  // TODO: Put an image instead Home
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="p-2 border-b border-gray-300 text-center">
        <Link href="/">
          <a className="rounded-full flex justify-center items-center text-center text-2xl font-bold">
            <IconBooks className="w-20 h-20 p-3 bg-indigo-100 rounded-full" />
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="shadow-md w-5/6 md:w-4/6 xl:w-2/6 bg-white p-12 shadow-form rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
