import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import Table from '../components/generic/Table';
import { MainPaths } from '../enums/paths/main-paths';
import { Books } from '../lib/booksForIndex';
import IconStar from '../components/icons/iconstar';
import ReactStars from 'react-rating-stars-component';

export default function Home() {
  return (
    <MainLayout
      title="Home"
      description="List your books"
      url={MainPaths.INDEX}
    >
      <div className="w-full lg:w-11/12 flex-col mt-28 text-center">
        <div className="overlay"></div>

        <h1 className="index-title">Bookstats</h1>

        <div className="index-button my-8">
          <Link href={MainPaths.AUTH}>
            <a
              className="px-6 py-3 font-bold bg-black text-white rounded-xl hover:opacity-60 
              transition-opacity duration-500 ease-out"
            >
              Sign In for Bookstats
            </a>
          </Link>
        </div>

        <div className="index-table mb-4 z-10 relative shadow-md overflow-hidden border-b border-gray-200 rounded-md">
          <div className="bg-yellow-100 p-3 flex flex-row justify-start">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-white pt-6 pb-8 px-3">
            <Table books={Books} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
