import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import { signOut } from 'lib/utils/auth.utils';
import { MainPaths } from 'enums/paths/main-paths';
import IconBooks from 'components/icons/iconbooks';

const Header = () => {
  // @ts-ignore
  const { user } = useSelector((state) => state.app);
  const { setUser, setUiState } = useActions();

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
