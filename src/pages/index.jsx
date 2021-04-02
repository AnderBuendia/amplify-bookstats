import Link from 'next/link';
import useResolution from 'hooks/useResolution';
import MainLayout from 'components/layouts/MainLayout';
import Table from 'components/generic/Table';
import Card from 'components/generic/Card';
import { MainPaths } from 'enums/paths/main-paths';
import { ResolutionBreakPoints } from 'enums/config/resolution-breakpoints';
import { Books } from 'lib/booksForIndex';

export default function Home() {
  const width = useResolution();

  return (
    <MainLayout
      title="Home"
      description="List your books"
      url={MainPaths.INDEX}
    >
      <div className="w-11/12 flex-col mt-28 text-center">
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

        <div className="index-table">
          <div className="bg-yellow-100 p-3 flex flex-row justify-start">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-white p-6 px-4">
            {width > ResolutionBreakPoints.SM ? (
              <Table books={Books} />
            ) : (
              <Card books={Books} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
