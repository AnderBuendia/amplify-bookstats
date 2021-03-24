import { useEffect, useContext } from 'react';
import Link from 'next/link';
import AuthContext from '../lib/context/auth/authContext';
import MainLayout from "../components/layouts/MainLayout";
import Table from '../components/generic/Table';
import { MainPaths } from '../enums/paths/main-paths';
import { checkUser } from '../lib/utils/auth.utils';
import { Books } from '../enums/booksForIndex';
 
export default function Home() {
  const { setUser, setUiState } = useContext(AuthContext);

  Books.map(book => console.log(book))
  useEffect(() => {
    checkUser(setUser, setUiState);
  }, []);

  return (
    <MainLayout
      title="Home"
      description="List your books"
      url={MainPaths.INDEX}
    >
      <div className="flex-col mt-28 text-center">
        <div className="overlay"></div>
   
        <h1 className="index-title">Bookstats</h1>

        <div className="index-button my-8">
          <Link href={MainPaths.AUTH}>
            <a className="p-3 bg-black text-white rounded-xl hover:opacity-60 
              transition-opacity duration-500 ease-out"
            >
              Sign In for Bookstats
            </a>
          </Link>
        </div>

        <Table />
      </div>
    </MainLayout>
  )
}
