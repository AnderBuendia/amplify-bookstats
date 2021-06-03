import Link from 'next/link';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import toast from 'react-hot-toast';
import useUser from 'hooks/useUser';
import { useActions } from '../../hooks/useActions';
import { MainPaths } from 'enums/paths/main-paths';
import IconBooks from 'components/icons/iconbooks';

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  const { signOutAction } = useActions();

  async function signOut() {
    try {
      await Auth.signOut();
      signOutAction();

      router.push(MainPaths.INDEX);
      toast.success('You have been disconnected');
    } catch (error) {
      toast.error(error.message);
    }
  }

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
          onClick={() => signOut()}
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
