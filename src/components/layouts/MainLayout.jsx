import { useRouter } from 'next/router';
import Head from '../generic/Head';
import Header from '../generic/Header';
import { MainPaths } from '../../enums/paths/main-paths';

const MainLayout = ({ title, description, url, children }) => {
  const router = useRouter();

  return (
    <>
      <Head title={title} description={description} url={url} />

      <div className="min-h-screen bg-gray-100">
        {router.pathname !== MainPaths.INDEX && <Header />}
        <div className="container mx-auto w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
