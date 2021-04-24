import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppContext from 'lib/context/app/appContext';
import { signOut } from 'lib/utils/auth.utils';
import { MainPaths } from 'enums/paths/main-paths';
import IconBooks from 'components/icons/iconbooks';

const Header = () => {
  const { user, setUser, setUiState } = useContext(AppContext);
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-between items-center p-3 border-b border-gray-300 shadow-sm">
      <Link href={MainPaths.BOOKS}>
        <a id="icon-books">
          <IconBooks className="w-12 h-12 hover:opacity-70 transition-opacity duration-500 ease-out" />
        </a>
      </Link>
      <h1 className="text-lg md:text-2xl font-bold">Bookstats</h1>

      {user ? (
        <button
          className="p-2 rounded-lg bg-black text-white hover:opacity-70 
            transition-opacity duration-500 ease-out"
          onClick={() => signOut(setUiState, setUser, router)}
        >
          Sign Out
        </button>
      ) : (
        <Link href={MainPaths.AUTH}>
          <a
            className="p-2 rounded-lg bg-black text-white hover:opacity-70 
                transition-opacity duration-500 ease-out"
          >
            Sign In
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Header;
