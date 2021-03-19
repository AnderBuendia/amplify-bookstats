import { useContext } from 'react';
import Link from 'next/link';
import { MainPaths } from '../../enums/paths/main-paths';
import AuthContext from '../../lib/context/auth/authContext';
import { signOut } from '../../lib/utils/auth.utils';

const Header = () => {
  const { user, uiState, setUser, setUiState } = useContext(AuthContext); 
  
  return (  
    <nav className="flex flex-row justify-end items-center py-3 px-8 border-b border-gray-300">
      <Link href={MainPaths.INDEX}>
          <a className="mr-5">Home</a>
      </Link>
      {
        (uiState === 'signedIn' && user) ? (
          <button
            className="px-3 py-2 rounded-lg bg-black text-white hover:opacity-60 
            transition-opacity duration-500 ease-out"
            onClick={() => signOut(setUiState, setUser)}
          >
            Sign Out
          </button>
        ) : (
          <Link href={MainPaths.AUTH}>
            <a className="px-3 py-2 rounded-lg bg-black text-white hover:opacity-60 
                transition-opacity duration-500 ease-out">
                Sign In
            </a>
          </Link>
        )
      }
    </nav>
  );
}
 
export default Header;