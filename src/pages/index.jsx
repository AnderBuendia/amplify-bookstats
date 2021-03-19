import { useEffect, useContext } from 'react';
import AuthContext from '../lib/context/auth/authContext';
import MainLayout from "../components/layouts/MainLayout";
import { MainPaths } from '../enums/paths/main-paths';
import { checkUser } from '../lib/utils/auth.utils';

export default function Home() {
  const { setUser, setUiState } = useContext(AuthContext);

  useEffect(() => {
    checkUser(setUser, setUiState);
  }, []);

  return (
    <MainLayout
      title="Home"
      description="List your books"
      url={MainPaths.INDEX}
    >
      <h1>From Index</h1>
    </MainLayout>
  )
}
