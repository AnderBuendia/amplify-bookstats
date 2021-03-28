import { useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import AuthContext from '../lib/context/auth/authContext';
import useResolution from '../hooks/useResolution';
import MainLayout from '../components/layouts/MainLayout';
import Table from '../components/generic/Table';
import Card from '../components/generic/Card';
import { MainPaths } from '../enums/paths/main-paths';
import { ResolutionBreakPoints } from '../enums/config/resolution-breakpoints';
import { Books as BooksForIndex } from '../lib/booksForIndex';

const Books = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const width = useResolution();

  useEffect(() => {
    checkAuthUser();
  }, []);

  async function checkAuthUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null);
      router.push(MainPaths.AUTH);
    }
  }

  if (!user) return null;

  return (
    <MainLayout
      title="My Books"
      description="Create a list of your favorite books"
      url={MainPaths.BOOKS}
    >
      {width > ResolutionBreakPoints.SM ? (
        <Table books={BooksForIndex} />
      ) : (
        <Card books={BooksForIndex} />
      )}
    </MainLayout>
  );
};

export default Books;
